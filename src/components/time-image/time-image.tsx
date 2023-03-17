import classnames from 'classnames';
import * as React from 'react';

type IProps = {
  date: string;
  time?: string;
  className?: string;
};

const classes = {
  root: 'font-inter font-normal text-[15px] leading-[18px] text-white absolute left-0 bottom-0 px-[10px] py-[7px] tracking-[0.15px] bg-primary-300',
};

export const TimeImage: React.FC<IProps> = ({
  className,
  date,
  time,
}: IProps) => {
  const classesName = classnames(classes.root, className);

  return (
    <figcaption className={classesName}>
      {date} {time ? <time className="ml-[6px]">{time}</time> : null}
    </figcaption>
  );
};

TimeImage.displayName = 'TimeImage';
