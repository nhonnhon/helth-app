import * as React from 'react';

import { ErrorBoundary } from '@/components/common/errors';

const TopPage = React.lazy(() => import('./top-page'));

const TopPageLazy: React.FC = () => {
  return (
    <ErrorBoundary>
      <TopPage />
    </ErrorBoundary>
  );
};

export { TopPageLazy };
