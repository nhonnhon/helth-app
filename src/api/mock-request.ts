import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_ENDPOINTS } from '@/configs/endpoint';
import { MEAL_HISTORIES } from '@/data';

const mockRequest = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios, {
    delayResponse: 500,
  });

  mock.onGet(API_ENDPOINTS.MEAL_HISTORIES).reply(200, MEAL_HISTORIES);
};

export default mockRequest;
