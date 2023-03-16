import * as React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './error-fallback';

type ErrorBoundaryProps = React.PropsWithChildren<Record<string, unknown>>;

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
}: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </ReactErrorBoundary>
  );
};

ErrorBoundary.displayName = 'ErrorBoundary';
