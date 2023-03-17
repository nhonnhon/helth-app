import * as React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart as LineChartLib,
  Text,
  Tooltip,
  XAxis,
} from 'recharts';

import { COLOR_CONST } from '@/constants/color.constant';

type IProps = {
  data: {
    name: string;
    thisYear: number;
    lastYear: number;
  }[];
  width: number;
  height: number;
  right: number;
};

const LINE_COLORS = [COLOR_CONST.primary_300, COLOR_CONST.secondary_300];
const LINE_STROKE_WIDTH = 3;
const LINE_DOT_STROKE_WIDTH = 3;
const CARTESIAN_GRID_COLOR = COLOR_CONST.gray_400;
const CARTESIAN_GRID_STROKE_WIDTH = 0.5;

export const LineChart: React.FC<IProps> = ({
  data,
  width = 910,
  height = 220,
  right = 30,
}: IProps) => {
  return (
    <LineChartLib
      width={width}
      height={height}
      data={data}
      margin={{ right, left: 30, top: 5, bottom: 5 }}
    >
      <CartesianGrid
        horizontal={false}
        stroke={CARTESIAN_GRID_COLOR}
        strokeWidth={CARTESIAN_GRID_STROKE_WIDTH}
      />
      <XAxis
        dataKey={'name'}
        axisLine={false}
        interval={0}
        tick={e => {
          const {
            payload: { value },
          } = e;

          return (
            <>
              <Text
                {...e}
                fill="#FFFFFF"
                fontSize={12}
                lineHeight={'15px'}
                textAnchor="middle"
                verticalAnchor={'start'}
                fontFamily={`"Inter", sans-serif`}
              >
                {value.split(' ')[0]}
              </Text>
              <Text
                {...e}
                fill="#FFFFFF"
                fontSize={'8px'}
                lineHeight={'12px'}
                fontWeight={300}
                dx={11}
                dy={2}
                fontFamily={`"Noto Sans JP", sans-serif`}
              >
                {value.split(' ')[1]}
              </Text>
            </>
          );
        }}
      />
      <Tooltip />
      <Line
        dataKey="lastYear"
        stroke={LINE_COLORS[0]}
        fill={LINE_COLORS[0]}
        strokeWidth={LINE_STROKE_WIDTH}
        dot={{
          strokeWidth: LINE_DOT_STROKE_WIDTH,
          stroke: LINE_COLORS[0],
          r: LINE_DOT_STROKE_WIDTH,
          fill: LINE_COLORS[0],
        }}
      />
      <Line
        dataKey="thisYear"
        stroke={LINE_COLORS[1]}
        fill={LINE_COLORS[0]}
        strokeWidth={LINE_STROKE_WIDTH}
        dot={{
          strokeWidth: LINE_DOT_STROKE_WIDTH,
          stroke: LINE_COLORS[1],
          r: LINE_DOT_STROKE_WIDTH,
          fill: LINE_COLORS[1],
        }}
      />
    </LineChartLib>
  );
};

LineChart.displayName = 'LineChart';
