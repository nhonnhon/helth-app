import * as React from 'react';

import { SectionCategories } from './modules';
import { ColumnNews } from './modules/column-news';

const ColumnPage: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-[56px] pt-[56px] pb-[64px]">
      <SectionCategories />
      <ColumnNews />
    </div>
  );
};

ColumnPage.displayName = 'ColumnPage';

export default ColumnPage;
