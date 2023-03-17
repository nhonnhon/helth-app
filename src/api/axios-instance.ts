import axios, { AxiosResponse } from 'axios';

import mockRequest from './mock-request';

const MOCK_REQUEST = true;

const instance = axios.create({
  baseURL: 'http://localhost:8090',
});

if (MOCK_REQUEST) {
  mockRequest(instance);
}

export class HttpService {
  static find = async <R>(url: string): Promise<AxiosResponse<R>> => {
    return instance.get<R>(url);
  };
}
