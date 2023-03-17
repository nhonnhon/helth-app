import * as React from 'react';

import { LineChart } from '@/components/line-chart';
import { BODY_FAT_DATA } from '@/data';

export const BodyFat: React.FC = () => {
  return (
    <div className="flex h-[312px] w-[740px] bg-dark-600 pt-[12px] pl-[23px]">
      <LineChart data={BODY_FAT_DATA} width={634} height={294} right={15} />
    </div>
  );
};

BodyFat.displayName = 'BodyFat';
