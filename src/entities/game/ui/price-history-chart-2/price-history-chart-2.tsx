'use client';

import { useRef, useState, useMemo } from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { Brush } from '@visx/brush';
import { Group } from '@visx/group';
import { useParentSize } from '@visx/responsive';
import { AxisBottom, AxisRight } from '@visx/axis';
import { max, extent, min } from '@visx/vendor/d3-array';
import { curveStep } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { Bounds } from '@visx/brush/lib/types';
import BaseBrush from '@visx/brush/lib/BaseBrush';

type PriceHistoryRecord = {
  startAt: string;
  price: number;
};

const series: PriceHistoryRecord[] = [
  { startAt: '2024-05-01', price: 10000 },
  { startAt: '2024-05-03', price: 9000 },
  { startAt: '2024-05-07', price: 7000 },
  { startAt: '2024-06-01', price: 10000 },
];

function getDate(record: PriceHistoryRecord) {
  return new Date(record.startAt);
}

function getValue(record: PriceHistoryRecord) {
  return record.price;
}

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

  const [dateRange, setDateRange] = useState([
    getDate(series[0]),
    getDate(series[series.length - 1]),
  ]);

  const dateScale = useMemo(
    () =>
      scaleTime({
        domain: dateRange,
        range: [0, xMax],
        clamp: true,
      }),
    [dateRange, xMax]
  );

  const minPrice = Math.max((min(series, getValue) || 0) - 1000, 0);
  const maxPrice = max(series, getValue) || 0;

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
    setDateRange([new Date(x0), new Date(x1)]);
  };

  return (
    <div ref={parentRef}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinePath
            curve={curveStep}
            data={series}
            x={(d) => dateScale(getDate(d))}
            y={(d) => priceScale(getValue(d))}
            stroke="#000"
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
            curve={curveStep}
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
            onClick={() =>
              setDateRange([
                new Date(series[0].startAt),
                new Date(series[series.length - 1].startAt),
              ])
            }
            useWindowMoveEvents
          />
        </Group>
      </svg>
    </div>
  );
}
