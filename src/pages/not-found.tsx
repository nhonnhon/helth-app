import * as React from 'react';

import { COMMON_CLASS } from '@/constants/class.constant';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={`min-h-screen ${COMMON_CLASS.flexCenterBetween}`}>
      NotFoundPage
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';
