import * as React from 'react';

import { useFetchMyDiaries } from '@/api/queries';
import { Button } from '@/components/common';
import { SECTION_ID } from '@/constants/my-record.constant';

import { MyDiaryItem } from './my-diary-item';
import { convertDataDiaries } from './util';

export const MyDiary: React.FC = () => {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useFetchMyDiaries();

  const dataDiaries = React.useMemo(() => {
    return convertDataDiaries(data?.pages);
  }, [data]);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div className="flex w-full flex-col" id={SECTION_ID.myDiary}>
      <h3 className="font-inter text-[1.375rem] uppercase leading-[1.688rem] tracking-[0.11px] text-dark-500">
        My Diary
      </h3>

      <div className="flex grid grid-cols-4 gap-[12px]">
        {dataDiaries.map(diary => (
          <MyDiaryItem key={diary.id} {...diary} />
        ))}
      </div>

      {hasNextPage ? (
        <Button
          className="mt-[30px] self-center"
          disabled={isFetching || isFetchingNextPage}
          onClick={handleLoadMore}
        >
          {isFetchingNextPage ? '読み込み中...' : '自分の日記をもっと見る'}
        </Button>
      ) : null}
    </div>
  );
};

MyDiary.displayName = 'MyDiary';
