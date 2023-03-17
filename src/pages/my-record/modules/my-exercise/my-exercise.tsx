import * as React from 'react';

import { ChartHeader } from '@/components/chart-header';
import { SECTION_ID } from '@/constants/my-record.constant';
import { RECORD_MY_EXERCISE } from '@/data';
import { getDateWithFormat } from '@/utils/date-format';

import { MyExerciseItem } from './my-exercise-item';

export const MyExercise: React.FC = () => {
  return (
    <div
      id={SECTION_ID.myExercise}
      className="h-[264px] w-full bg-dark-500 py-[16px] pl-[24px] pr-[26px]"
    >
      <ChartHeader
        title="My Exercise"
        date={getDateWithFormat(new Date(), 'YYYY.MM.DD')}
      />

      <div className="scrollbar relative mt-[4px] flex grid h-[192px] grid-cols-2 gap-x-[40px] gap-y-[8px] overflow-auto pr-[30px] pb-[8px]">
        {RECORD_MY_EXERCISE.map(({ title, calory, duration, id }) => (
          <MyExerciseItem
            key={id}
            title={title}
            calory={calory}
            duration={duration}
          />
        ))}
      </div>
    </div>
  );
};

MyExercise.displayName = 'MyExercise';
