import * as React from 'react';
import { RouteObject } from 'react-router-dom';

import { MainLayout } from '@/layouts';
import { ColumnPageLazy } from '@/pages/column';
import { MyRecordPageLazy } from '@/pages/my-record';
import { NotFoundPage } from '@/pages/not-found';
import { TopPageLazy } from '@/pages/top-page';

import { ROUTE_PATHS } from './routes';

export const ROUTERS: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <TopPageLazy />,
      },
      {
        path: ROUTE_PATHS.MY_RECORDS,
        element: <MyRecordPageLazy />,
      },
      {
        path: ROUTE_PATHS.COLUMNS,
        element: <ColumnPageLazy />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
