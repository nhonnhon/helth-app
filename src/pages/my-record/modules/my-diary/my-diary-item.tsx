import classnames from 'classnames';
import React from 'react';

export interface IDiaryItemProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
}

const classes = {
  text: 'font-light text-[0.75rem] leading-[1.063rem] tracking-[0.06px] text-dark-500',
  time: 'font-inter text-[1.125rem] leading-[1.375rem] tracking-[0.09px] text-dark-500',
};

export const MyDiaryItem: React.FC<IDiaryItemProps> = ({
  title,
  description,
  date,
  time,
}: IDiaryItemProps) => {
  return (
    <div className="flex h-[231px] w-[231px] flex-col border-2 border-solid border-[#707070] bg-light p-[16px]">
      <time className={classes.time}>{date}</time>
      <time className={classes.time}>{time}</time>
      <h4 className={classnames(classes.text, 'mt-[8px] line-clamp-2')}>
        {title}
      </h4>
      <div className={classnames(classes.text, 'line-clamp-5')}>
        {description}
      </div>
    </div>
  );
};

MyDiaryItem.displayName = 'MyDiaryItem';
