import * as React from 'react';

interface IProps {
  title: string;
  calory: string;
  duration: string;
}

export const MyExerciseItem: React.FC<IProps> = ({
  title,
  calory,
  duration,
}: IProps) => {
  return (
    <div className="flex flex-col border-b border-gray-400 pb-[2px] pr-[13px]">
      <div className="flex justify-between">
        <div className="flex font-light text-white">
          <div className="pt-[5px] text-[5px] leading-[7px] tracking-[0.015px]">
            ●
          </div>
          <div className="ml-[11px] text-[0.938rem] leading-[1.125rem] tracking-[0.075px]">
            {title}
          </div>
        </div>
        <div className="text-right font-inter text-[1.125rem] leading-[1.375rem] tracking-[0.09px] text-primary-300">
          {duration}
        </div>
      </div>

      <div className="ml-[16px] font-inter text-[0.938rem] leading-[1.125rem] tracking-[0.075px] text-primary-300">
        {calory}
      </div>
    </div>
  );
};

MyExerciseItem.displayName = 'MyExerciseItem';
