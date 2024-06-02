'use client';

import { useRef, useState, useMemo } from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { Brush } from '@visx/brush';
import { Group } from '@visx/group';
import { useParentSize } from '@visx/responsive';
import { AxisBottom, AxisRight } from '@visx/axis';
import { max, extent, min, bisector } from '@visx/vendor/d3-array';
import { curveStepAfter } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { Bounds } from '@visx/brush/lib/types';
import BaseBrush from '@visx/brush/lib/BaseBrush';
import { localPoint } from '@visx/event';
import { useTooltip, Tooltip } from '@visx/tooltip';
import dayjs from 'dayjs';

import * as styles from './price-history-chart-2.css';

type PriceHistoryRecord = {
  startAt: string;
  price: number;
};

const series: PriceHistoryRecord[] = [
  { startAt: '2024-05-01', price: 10000 },
  { startAt: '2024-05-03', price: 9000 },
  { startAt: '2024-05-07', price: 7000 },
  { startAt: '2024-06-01', price: 10000 },
  { startAt: '2024-06-02', price: 10000 },
];

function getDate(record: PriceHistoryRecord) {
  return new Date(record.startAt);
}

function getValue(record: PriceHistoryRecord) {
  return record.price;
}

const bisectDate = bisector<PriceHistoryRecord, Date>(
  (d) => new Date(d.startAt)
).left;

export default function PriceHistoryChart2() {
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

  const [filteredSeries, setFilterSeries] = useState(series);

  const dateScale = useMemo(
    () =>
      scaleTime({
        domain: extent(filteredSeries, getDate) as [Date, Date],
        range: [0, xMax],
      }),
    [filteredSeries, xMax]
  );

  const minPrice = 0;
  const maxPrice = (max(series, getValue) || 0) * 2;

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
        domain: extent(series, getDate) as [Date, Date],
        range: [0, xBrushMax],
      }),
    [xBrushMax]
  );

  const brushPriceScale = useMemo(
    () =>
      scaleLinear({
        domain: [minPrice, maxPrice],
        range: [yBrushMax, 0],
      }),
    [yBrushMax, minPrice, maxPrice]
  );

  const brushRef = useRef<BaseBrush | null>(null);

  const initialBrushPosition = {
    start: { x: brushDateScale(getDate(series[0])) },
    end: { x: brushDateScale(getDate(series[series.length - 1])) },
  };

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) {
      return;
    }

    const { x0, x1 } = domain;
    const startDate = new Date(x0);
    const endDate = new Date(x1);
    let seriesCopy = series.filter((s) => {
      const date = getDate(s);

      return startDate <= date && date <= endDate;
    });
    const firstIndex = series.findLastIndex((s) => getDate(s) < startDate);
    seriesCopy = [
      {
        startAt: startDate.toISOString(),
        price: series[Math.max(firstIndex, 0)].price,
      },
      ...seriesCopy,
    ];
    const lastIndex = series.findLastIndex((s) => getDate(s) < endDate);
    seriesCopy = [
      ...seriesCopy,
      {
        startAt: endDate.toISOString(),
        price: series[lastIndex === -1 ? series.length - 1 : lastIndex].price,
      },
    ];
    setFilterSeries(seriesCopy);
  };

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
    const index = bisectDate(series, x0, 1);
    const d0 = series[index - 1];
    const d1 = series[index];
    let d = d0;
    if (d1 && getDate(d1)) {
      d =
        x0.valueOf() - getDate(d0).valueOf() >
        getDate(d1).valueOf() - x0.valueOf()
          ? d1
          : d0;
    }

    if (
      d.startAt < filteredSeries[0].startAt ||
      filteredSeries[filteredSeries.length - 1].startAt < d.startAt
    ) {
      return;
    }

    const tooltipPos = {
      tooltipData: {
        date: dayjs(getDate(d)).format('YYYY.MM.DD'),
        price: `${getValue(d).toLocaleString()}원`,
      },
      tooltipLeft: dateScale(getDate(d)),
      tooltipTop: priceScale(getValue(d)),
    };
    showTooltip(tooltipPos);
  };

  return (
    <div ref={parentRef} className={styles.container}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinePath
            curve={curveStepAfter}
            data={filteredSeries}
            x={(d) => dateScale(getDate(d))}
            y={(d) => priceScale(getValue(d))}
            stroke="#000"
          />
          <rect
            width={width - margin.left - margin.right}
            height={topChartHeight}
            fill="transparent"
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
            data={series}
            x={(d) => brushDateScale(getDate(d))}
            y={(d) => brushPriceScale(getValue(d))}
            stroke="#000"
          />
          <Brush
            xScale={brushDateScale}
            yScale={brushPriceScale}
            width={xBrushMax}
            height={yBrushMax}
            handleSize={8}
            innerRef={brushRef}
            resizeTriggerAreas={['left', 'right']}
            brushDirection="horizontal"
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            onClick={() => setFilterSeries(series)}
            useWindowMoveEvents
          />
        </Group>
      </svg>
      {tooltipOpen && (
        <Tooltip top={tooltipTop} left={tooltipLeft}>
          <div>날짜: {tooltipData.date}</div>
          <div>가격: {tooltipData.price}</div>
        </Tooltip>
      )}
    </div>
  );
}
