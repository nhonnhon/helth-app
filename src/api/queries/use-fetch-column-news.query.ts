import { useInfiniteQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/endpoint';
import { addPaginationAndFilter } from '@/utils/misc';

import { HttpService } from '../axios-instance';

export interface IColumnNewsResponse {
  id: string;
  createdAt: string;
  title: string;
  image: string;
  hashTags: string[];
}

const totalItems = 30;
const limit = 8;

const fetchColumnsNews = async (
  page: number
): Promise<IColumnNewsResponse[]> => {
  const { data } = await HttpService.find<IColumnNewsResponse[]>(
    API_ENDPOINTS.COLUMN_NEWS
  );

  return addPaginationAndFilter(data, limit, page);
};

const useFetchColumnNews = () => {
  return useInfiniteQuery(
    [API_ENDPOINTS.COLUMN_NEWS],
    async ({ pageParam = 1 }) => {
      const data = await fetchColumnsNews(pageParam);
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

export { fetchColumnsNews, useFetchColumnNews };
