import * as React from 'react';

import { BodyGraph, MyDiary, MyExercise, SectionButton } from './modules';

const MyRecordPage: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-[56px] pt-[56px] pb-[64px]">
      <SectionButton />
      <BodyGraph />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

MyRecordPage.displayName = 'MyRecordPage';

export default MyRecordPage;
