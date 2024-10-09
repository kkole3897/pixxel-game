'use client';

import { useRef, useState, useMemo } from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { Brush } from '@visx/brush';
import { Group } from '@visx/group';
import { useParentSize, useScreenSize } from '@visx/responsive';
import { AxisBottom, AxisRight, AxisTop } from '@visx/axis';
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
import { GridRows } from '@visx/grid';

import dayjs from '@/shared/lib/dayjs';
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
  const { width: screenWidth } = useScreenSize();
  const xAxisNumTicks = screenWidth < 768 ? 4 : 10;

  const brushHeight = 40;
  const rowGap = 30;
  const margin = {
    top: 20,
    left: 20,
    right: 60,
    bottom: 20,
  };
  const brushMargin = {
    top: 10,
    bottom: 15,
    left: 20,
    right: 60,
  };
  const innerHeight = height - margin.top - margin.bottom;
  const topChartHeight = innerHeight - brushHeight - rowGap;

  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(brushHeight, 0);

  const minDate = useRef(min(props.data, getDate));
  const maxDate = useRef(new Date());
  const firstDateBoundary = dayjs(maxDate.current)
    .subtract(3, 'months')
    .toDate();
  const firstDate =
    minDate.current && minDate.current > firstDateBoundary
      ? minDate.current
      : firstDateBoundary;

  const [dateRange, setDateRange] = useState<[Date, Date]>([
    firstDate,
    maxDate.current,
  ]);
  const filteredData = useMemo(() => {
    const [startDate, endDate] = dateRange;

    if (startDate > getDate(props.data[props.data.length - 1])) {
      return [];
    }

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
    const lastIndex = props.data.findLastIndex((d) => getDate(d) <= endDate);

    const lastData =
      props.data[lastIndex === -1 ? props.data.length - 1 : lastIndex];

    if (lastIndex === props.data.length - 1 && endDate > getDate(lastData)) {
      return [
        ...dataCopy,
        {
          startAt: getDate(lastData).toISOString(),
          price: lastData.price,
        },
      ];
    }

    return [
      ...dataCopy,
      {
        startAt: endDate.toISOString(),
        price: lastData.price,
      },
    ];
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
        domain: [minDate.current, maxDate.current] as [Date, Date],
        range: [0, xBrushMax],
      }),
    [minDate, maxDate, xBrushMax]
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
    start: { x: brushDateScale(firstDate) },
    end: { x: brushDateScale(maxDate.current) },
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
        date: dayjs(getDate(d)).tz().format('YYYY.MM.DD'),
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
                stroke="#b3b5b9"
              />
            </Group>
          )}
          <GridRows
            scale={priceScale}
            stroke="#cccdd0"
            strokeDasharray="2, 2"
            width={width - margin.left - margin.right}
            numTicks={5}
          />
          <LinePath
            curve={curveStepAfter}
            data={filteredData}
            x={(d) => dateScale(getDate(d))}
            y={(d) => priceScale(getValue(d))}
            stroke="#3786fb"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {tooltipOpen && (
            <Group top={-margin.top} left={-margin.left}>
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r="8"
                fill="#3786fb"
                fillOpacity="0.25"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r="4"
                fill="#3786fb"
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
            stroke="#b3b5b9"
            top={topChartHeight}
            numTicks={xAxisNumTicks}
            tickStroke="#b3b5b9"
            tickLabelProps={() => ({
              dx: -12,
              dy: 2,
              fill: '#80838a',
              fontSize: 10,
              fontFamily: 'Pretendard, sans-serif',
            })}
          />
          <AxisRight
            scale={priceScale}
            left={width - margin.right}
            numTicks={5}
            stroke="transparent"
            tickStroke="transparent"
            tickLabelProps={() => ({
              dx: -15,
              dy: 4,
              fontSize: 10,
              fill: '#80838a',
              fontFamily: 'Pretendard, sans-serif',
            })}
          />
        </Group>
        <Group left={margin.left} top={margin.top + topChartHeight + rowGap}>
          <LinePath
            curve={curveStepAfter}
            data={props.data}
            x={(d) => brushDateScale(getDate(d))}
            y={(d) => brushPriceScale(getValue(d))}
            stroke="#3786fb"
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
            selectedBoxStyle={{ fill: '#cccdd0', fillOpacity: 0.5 }}
          />
          <AxisTop
            scale={brushDateScale}
            stroke="#b3b5b9"
            top={0}
            numTicks={0}
            tickStroke="transparent"
          />
          <AxisBottom
            scale={brushDateScale}
            stroke="#b3b5b9"
            top={yBrushMax}
            numTicks={0}
            tickStroke="transparent"
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
