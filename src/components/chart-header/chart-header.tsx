import * as React from 'react';

type IProps = {
  title: string;
  date: string;
};

export const ChartHeader: React.FC<IProps> = ({ title, date }: IProps) => {
  return (
    <div className="flex text-white">
      <h2 className="w-[96px] font-inter text-[0.938rem] uppercase leading-[1.125rem] tracking-[0.15px]">
        {title}
      </h2>
      <div className="font-inter text-[1.375rem] leading-[1.688rem] tracking-[0.11px]">
        {date}
      </div>
    </div>
  );
};

ChartHeader.displayName = 'ChartHeader';
