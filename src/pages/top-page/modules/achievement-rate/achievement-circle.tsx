import * as React from 'react';

import { COMMON_CLASS } from '@/constants/class.constant';

type IProps = {
  percentage: number;
  date: string;
};

export const AchievementCircle: React.FC<IProps> = ({
  percentage,
  date,
}: IProps) => {
  const renderText = (text: string, customClasses: string) => (
    <span
      className={`font-inter text-white drop-shadow-[0_0px_6px_#FC7400] ${customClasses}`}
    >
      {text}
    </span>
  );

  return (
    <div
      className={`${COMMON_CLASS.absoluteCenterBetween} ${COMMON_CLASS.flexCenterBetween} h-[205px] w-[205px]`}
    >
      <div className="inline-block">
        {renderText(date, 'text-[1.125rem] leading-[1.375rem]')}
        {renderText(
          `${percentage}%`,
          'ml-[4px] text-[1.563rem] leading-[1.875rem]'
        )}
      </div>
      <svg
        viewBox="0 0 36 36"
        className={`absolute inset-0 block h-[205px] w-[205px]`}
      >
        <path
          className="stroke-0.5 animate-progressSVG fill-none stroke-white"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          filter="url(#shadow)"
        />

        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.6"
              floodColor="#FC7400"
              floodOpacity="1"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

AchievementCircle.displayName = 'AchievementCircle';
