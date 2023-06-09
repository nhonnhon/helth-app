import * as React from 'react';

import { COLOR_CONST } from '@/constants/color.constant';

export const ScrollIcon: React.FC = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
        fill="white"
        fillOpacity="0.01"
        stroke={COLOR_CONST.gray_400}
      />
      <path
        d="M30.5852 28.042L24.0002 21.6579L17.4151 28.042L16.5389 27.1925L24.0002 19.959L31.4614 27.1925L30.5852 28.042Z"
        fill={COLOR_CONST.gray_400}
      />
    </svg>
  );
};

ScrollIcon.displayName = 'ScrollIcon';
