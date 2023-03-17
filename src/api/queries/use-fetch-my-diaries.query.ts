import { useInfiniteQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/endpoint';
import { addPaginationAndFilter } from '@/utils/misc';

import { HttpService } from '../axios-instance';

export interface IMyDiaryResponse {
  id: string;
  createdAt: string;
  title: string;
  description: string;
}

const totalItems = 30;
const limit = 8;

const fetchMyDiary = async (page: number): Promise<IMyDiaryResponse[]> => {
  const { data } = await HttpService.find<IMyDiaryResponse[]>(
    API_ENDPOINTS.MY_DIARIES
  );
  return addPaginationAndFilter(data, limit, page);
};

const useFetchMyDiaries = () => {
  return useInfiniteQuery(
    [API_ENDPOINTS.MY_DIARIES],
    async ({ pageParam = 1 }) => {
      const data = await fetchMyDiary(pageParam);
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

export { fetchMyDiary, useFetchMyDiaries };
