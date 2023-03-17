import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_ENDPOINTS } from '@/configs/endpoint';
import { COLUMN_NEWS, MEAL_HISTORIES, RECORD_MY_DIARIES } from '@/data';

const mockRequest = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios, {
    delayResponse: 500,
  });

  mock.onGet(API_ENDPOINTS.MEAL_HISTORIES).reply(200, MEAL_HISTORIES);
  mock.onGet(API_ENDPOINTS.MY_DIARIES).reply(200, RECORD_MY_DIARIES);
  mock.onGet(API_ENDPOINTS.COLUMN_NEWS).reply(200, COLUMN_NEWS);
};

export default mockRequest;
