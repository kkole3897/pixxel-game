'use client';

import { useRef, useState, useMemo } from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { Brush } from '@visx/brush';
import { Group } from '@visx/group';
import { useParentSize } from '@visx/responsive';
import { AxisBottom, AxisRight } from '@visx/axis';
import { max, extent, bisector, min } from '@visx/vendor/d3-array';
import { curveStepAfter } from '@visx/curve';
import { LinePath, Line } from '@visx/shape';
import { Bounds } from '@visx/brush/lib/types';
import BaseBrush from '@visx/brush/lib/BaseBrush';
import { localPoint } from '@visx/event';
import {
  useTooltip,
  TooltipWithBounds,
  useTooltipInPortal,
} from '@visx/tooltip';
import dayjs from 'dayjs';

import * as styles from './price-history-chart.css';

type PriceHistoryRecord = {
  startAt: string;
  price: number;
};

function getDate(record: PriceHistoryRecord) {
  return new Date(record.startAt);
}

function getValue(record: PriceHistoryRecord) {
  return record.price;
}

const bisectDate = bisector<PriceHistoryRecord, Date>((d) => getDate(d)).left;

interface PriceHistoryChartProps {
  data: PriceHistoryRecord[];
}

export default function PriceHistoryChart(props: PriceHistoryChartProps) {
  const initialWidth = 200;
  const height = 400;

  const { parentRef, width } = useParentSize({
    initialSize: { width: initialWidth },
  });

  const brushHeight = 40;
  const rowGap = 30;
  const margin = {
    top: 20,
    left: 20,
    right: 80,
    bottom: 20,
  };
  const brushMargin = {
    top: 10,
    bottom: 15,
    left: 20,
    right: 80,
  };
  const innerHeight = height - margin.top - margin.bottom;
  const topChartHeight = innerHeight - brushHeight - rowGap;

  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(brushHeight, 0);

  const minDate = min(props.data, getDate);
  const maxDate = max(props.data, getDate) ?? new Date();
  const firstDateBoundary = dayjs(maxDate).subtract(3, 'months').toDate();
  const firstDate =
    minDate && minDate > firstDateBoundary ? minDate : firstDateBoundary;

  const [dateRange, setDateRange] = useState<[Date, Date]>([
    firstDate,
    maxDate,
  ]);
  const filteredData = useMemo(() => {
    const [startDate, endDate] = dateRange;
    let dataCopy = props.data.filter((d) => {
      const date = getDate(d);

      return startDate <= date && date <= endDate;
    });

    const firstIndex = props.data.findLastIndex((d) => getDate(d) < startDate);
    dataCopy = [
      {
        startAt: startDate.toISOString(),
        price: props.data[Math.max(firstIndex, 0)].price,
      },
      ...dataCopy,
    ];
    const lastIndex = props.data.findLastIndex((d) => getDate(d) < endDate);
    dataCopy = [
      ...dataCopy,
      {
        startAt: endDate.toISOString(),
        price:
          props.data[lastIndex === -1 ? props.data.length - 1 : lastIndex]
            .price,
      },
    ];

    return dataCopy;
  }, [dateRange, props.data]);

  const dateScale = useMemo(
    () =>
      scaleTime({
        domain: dateRange,
        range: [0, xMax],
      }),
    [dateRange, xMax]
  );

  const minPrice = Math.max((min(props.data, getValue) || 0) - 1000, 0);
  const maxPrice = (max(props.data, getValue) || 0) + 1000;

  const priceScale = useMemo(
    () =>
      scaleLinear({
        domain: [minPrice, maxPrice],
        range: [yMax, 0],
        nice: true,
      }),
    [minPrice, maxPrice, yMax]
  );

  const brushDateScale = useMemo(
    () =>
      scaleTime({
        domain: extent(props.data, getDate) as [Date, Date],
        range: [0, xBrushMax],
      }),
    [xBrushMax, props.data]
  );

  const brushPriceScale = useMemo(
    () =>
      scaleLinear({
        domain: extent(props.data, getValue) as [number, number],
        range: [yBrushMax, 0],
      }),
    [yBrushMax, props.data]
  );

  const brushRef = useRef<BaseBrush | null>(null);

  const initialBrushPosition = {
    start: { x: brushDateScale(getDate(filteredData[0])) },
    end: { x: brushDateScale(getDate(filteredData[filteredData.length - 1])) },
  };

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) {
      return;
    }

    const { x0, x1 } = domain;
    const startDate = new Date(x0);
    const endDate = new Date(x1);
    setDateRange([startDate, endDate]);
  };

  const { containerRef } = useTooltipInPortal({ detectBounds: true });

  const {
    tooltipTop,
    tooltipLeft,
    tooltipOpen,
    hideTooltip,
    showTooltip,
    tooltipData = { date: '2024.06.02', price: '0원' },
  } = useTooltip<{ date: string; price: string }>();

  const handleTooltip = (
    event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
  ) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = dateScale.invert(x);
    const index = bisectDate(props.data, x0, 1);
    const d0 = props.data[index - 1];
    const d1 = props.data[index];
    let d = d0;
    if (d1 && getDate(d1)) {
      d =
        x0.valueOf() - getDate(d0).valueOf() >
        getDate(d1).valueOf() - x0.valueOf()
          ? d1
          : d0;
    }

    if (
      getDate(d) < getDate(filteredData[0]) ||
      getDate(filteredData[filteredData.length - 1]) < getDate(d)
    ) {
      return;
    }

    const tooltipPos = {
      tooltipData: {
        date: dayjs(getDate(d)).format('YYYY.MM.DD'),
        price: `${getValue(d).toLocaleString()}원`,
      },
      tooltipLeft: dateScale(getDate(d)) + margin.left,
      tooltipTop: priceScale(getValue(d)) + margin.top,
    };
    showTooltip(tooltipPos);
  };

  return (
    <div ref={parentRef} className={styles.container}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          {tooltipOpen && (
            <Group top={-margin.top} left={-margin.left}>
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: topChartHeight }}
                stroke="#cccccc"
              />
            </Group>
          )}
          <LinePath
            curve={curveStepAfter}
            data={filteredData}
            x={(d) => dateScale(getDate(d))}
            y={(d) => priceScale(getValue(d))}
            stroke="#000"
            strokeWidth={2}
          />
          {tooltipOpen && (
            <Group top={-margin.top} left={-margin.left}>
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r="8"
                fill="#000"
                fillOpacity="0.25"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r="4"
                fill="#000"
                stroke="#fff"
              />
            </Group>
          )}
          <rect
            width={width - margin.left - margin.right}
            height={topChartHeight}
            fill="transparent"
            ref={containerRef}
            onTouchMove={handleTooltip}
            onTouchStart={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          <AxisBottom
            scale={dateScale}
            stroke="#000"
            top={topChartHeight}
            numTicks={5}
          />
          <AxisRight
            scale={priceScale}
            left={width - margin.right}
            numTicks={2}
            stroke="transparent"
            tickStroke="transparent"
          />
        </Group>
        <Group left={margin.left} top={margin.top + topChartHeight + rowGap}>
          <LinePath
            curve={curveStepAfter}
            data={props.data}
            x={(d) => brushDateScale(getDate(d))}
            y={(d) => brushPriceScale(getValue(d))}
            stroke="#000"
            strokeWidth={1}
          />
          <Brush
            xScale={brushDateScale}
            yScale={brushPriceScale}
            width={xBrushMax}
            height={yBrushMax}
            innerRef={brushRef}
            resizeTriggerAreas={[]}
            brushDirection="horizontal"
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            disableDraggingOverlay
            useWindowMoveEvents
          />
        </Group>
        {tooltipOpen && <Group></Group>}
      </svg>
      {tooltipOpen && (
        <TooltipWithBounds top={tooltipTop} left={tooltipLeft}>
          <div>날짜: {tooltipData.date}</div>
          <div>가격: {tooltipData.price}</div>
        </TooltipWithBounds>
      )}
    </div>
  );
}
