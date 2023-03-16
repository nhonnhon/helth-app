import * as React from 'react';

import { Button } from '../button';

type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div>
      <p>Uh oh... Something went wrong. Try refreshing the app.</p>

      <Button onClick={resetErrorBoundary}>Click to refresh</Button>
    </div>
  );
};

ErrorFallback.displayName = 'ErrorFallback';
