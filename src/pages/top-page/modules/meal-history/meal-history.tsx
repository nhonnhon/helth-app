import * as React from 'react';

import { useFetchMealHistories } from '@/api/queries';
import { Button } from '@/components/common';
import { FilterButton } from '@/components/filter-button';
import { CupIcon, KnifeIcon } from '@/components/icons';
import { MEAL_TYPES } from '@/data';

import { convertDataMealHistories } from './util';

export const MAP_ICONS: Record<string, React.ReactNode | JSX.Element> = {
  knife: <KnifeIcon />,
  cup: <CupIcon />,
};

export const MealHistory: React.FC = () => {
  const [filterId, setFilterId] = React.useState<string>('');

  const {
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useFetchMealHistories(filterId);

  React.useEffect(() => {
    refetch();
  }, [filterId, refetch]);

  const convertMealHistory = React.useMemo(() => {
    return convertDataMealHistories(data?.pages);
  }, [data]);

  return (
    <div>
      <div className="mx-auto mt-[25px] mb-[25px] flex w-[44.75rem] justify-between">
        {MEAL_TYPES.map(({ name, icon, id }) => (
          <FilterButton
            key={id}
            icon={MAP_ICONS[icon]}
            name={name}
            onFilter={() => {
              setFilterId(filterId === id ? '' : id);
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center pb-[4rem]">
        <div className="mx-auto grid w-[60rem] grid-cols-4 gap-1">
          {convertMealHistory.length ? (
            convertMealHistory.map(({ id, image, date }) => (
              <figure key={id} className="relative h-[234px] w-[234px]">
                <picture>
                  <img
                    src={image}
                    alt={''}
                    className="h-[234px] w-[234px] object-cover"
                  />
                </picture>
                <figcaption className="absolute left-0 bottom-0 bg-primary-300 px-[10px] py-[7px] font-inter text-[15px] font-normal leading-[18px] tracking-[0.15px] text-white">
                  {date ? <time className="ml-[6px]">{date}</time> : null}
                </figcaption>
              </figure>
            ))
          ) : (
            <div>No result</div>
          )}
        </div>

        {hasNextPage ? (
          <Button
            className="mt-[28px]"
            disabled={isFetching || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? '読み込み中...' : '記録をもっと見る'}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

MealHistory.displayName = 'MealHistory';
