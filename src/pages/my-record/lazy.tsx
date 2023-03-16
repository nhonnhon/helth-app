import * as React from 'react';

import { ErrorBoundary } from '@/components/common/errors';

const MyRecordPage = React.lazy(() => import('./my-record'));

const MyRecordPageLazy: React.FC = () => {
  return (
    <ErrorBoundary>
      <MyRecordPage />
    </ErrorBoundary>
  );
};

export { MyRecordPageLazy };
