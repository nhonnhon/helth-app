import * as React from 'react';

import { COMMON_CLASS } from '@/constants/class.constant';

type BadgeProps = React.PropsWithChildren<Record<string, unknown>> & {
  count: number | string;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  count,
}: BadgeProps) => {
  return (
    <span className="relative">
      {children}
      <span
        className={`absolute top-0 right-[-8px] h-4 w-4 rounded-full bg-primary-500 font-inter text-[10px] leading-[12px] text-light ${COMMON_CLASS.flexCenterBetween}`}
      >
        {count}
      </span>
    </span>
  );
};

Badge.displayName = 'Badge';
