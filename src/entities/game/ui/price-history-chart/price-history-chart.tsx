'use client';

import dayjs from 'dayjs';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Brush,
} from 'recharts';

import * as styles from './price-history-chart.css';
import type { GameStore } from '../../model';

interface Props {
  history: ({
    [key in GameStore]?: number;
  } & { date: string })[];
}

export default function PriceHistoryChart({ history }: Props) {
  const data = history.map(({ date, ...rest }) => ({
    timestamp: dayjs(date).unix(),
    ...rest,
  }));

  return (
    <div className={styles.lineChartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <XAxis
            dataKey="timestamp"
            style={{
              fontSize: '0.875rem',
            }}
            type="number"
            tickFormatter={(value: number) => dayjs.unix(value).format('MM.DD')}
            domain={['dataMin', 'dataMax']}
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            tickFormatter={(value: number) =>
              value === 0 ? '' : value.toLocaleString()
            }
            style={{
              fontSize: '0.875rem',
            }}
            tickCount={6}
          />
          <CartesianGrid vertical={false} strokeDasharray="5 5" />
          <Tooltip
            formatter={(value: string, name) => [
              `${value.toLocaleString()}원`,
              name,
            ]}
            labelFormatter={(label) => dayjs.unix(label).format('YYYY.MM.DD')}
          />
          <Line
            dataKey="steam"
            type="stepAfter"
            stroke="#1d4ed8"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: '#8884d8',
              strokeWidth: 2,
              r: 4,
            }}
          />
          <Brush
            height={35}
            startIndex={history.length - 8}
            endIndex={history.length - 1}
            dataKey="timestamp"
            tickFormatter={(value: number) =>
              dayjs.unix(value).format('YY.MM.DD')
            }
          >
            <LineChart>
              <Line
                dataKey="steam"
                type="stepAfter"
                dot={false}
                isAnimationActive={false}
                stroke="#1d4ed8"
              />
            </LineChart>
          </Brush>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
