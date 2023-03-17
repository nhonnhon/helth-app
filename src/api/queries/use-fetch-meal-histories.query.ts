import { useInfiniteQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/endpoint';
import { addPaginationAndFilter } from '@/utils/misc';

import { HttpService } from '../axios-instance';

export interface IMealHistoryResponse {
  id: string;
  image: string;
  types: {
    id: string;
    name: string;
  };
  createdAt: string;
}

const totalItems = 30;
const limit = 8;

const fetchMealHistories = async (
  page: number,
  filterId?: string
): Promise<IMealHistoryResponse[]> => {
  const { data } = await HttpService.find<IMealHistoryResponse[]>(
    API_ENDPOINTS.MEAL_HISTORIES
  );

  return addPaginationAndFilter(data, limit, page, filterId);
};

const useFetchMealHistories = (filterId?: string) => {
  return useInfiniteQuery(
    [API_ENDPOINTS.MEAL_HISTORIES],
    async ({ pageParam = 1 }) => {
      const data = await fetchMealHistories(pageParam, filterId);
      return data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = Math.ceil(totalItems / limit);
        return nextPage > allPages.length ? allPages.length + 1 : false;
      },
    }
  );
};

export { fetchMealHistories, useFetchMealHistories };
