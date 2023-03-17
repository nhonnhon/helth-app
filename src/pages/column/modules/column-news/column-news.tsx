import * as React from 'react';

import { useFetchColumnNews } from '@/api/queries';
import { ButtonLoadMore } from '@/components/button-loadmore';
import { News, NewsHashTag } from '@/components/news';
import { TimeImage } from '@/components/time-image';

import { convertDataColumnNews } from './util';

export const ColumnNews: React.FC = () => {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useFetchColumnNews();

  const dataColumnNews = React.useMemo(() => {
    return convertDataColumnNews(data?.pages);
  }, [data?.pages]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex grid grid-cols-4 gap-[8px]">
        {dataColumnNews.map(({ id, title, image, date, time, hashTags }) => (
          <News
            key={id}
            title={title}
            image={image}
            time={<TimeImage date={date} time={time} />}
            hashTags={<NewsHashTag hashTags={hashTags} />}
          />
        ))}
      </div>

      {hasNextPage ? (
        <ButtonLoadMore
          disabled={isFetching || isFetchingNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        />
      ) : null}
    </div>
  );
};

ColumnNews.displayName = 'ColumnNews';
