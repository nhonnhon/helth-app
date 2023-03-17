import * as React from 'react';

import { ChartHeader } from '@/components/chart-header';
import { Button } from '@/components/common';
import { LineChart } from '@/components/line-chart';
import { COMMON_CLASS } from '@/constants/class.constant';
import { FILTER_GRAPH, SECTION_ID } from '@/constants/my-record.constant';
import { BODY_FAT_DATA } from '@/data';
import { getDateWithFormat } from '@/utils/date-format';

export const BodyGraph: React.FC = () => {
  const [currentFilter, setCurrentFilter] = React.useState('year');

  const handleFilterClick = (filterBy: string) => {
    setCurrentFilter(filterBy);
  };

  return (
    <div
      id={SECTION_ID.bodyGraph}
      className="relative h-[304px] w-full bg-dark-500 py-[16px] pl-[24px] pr-[24px]"
    >
      <ChartHeader
        title="Body Record"
        date={getDateWithFormat(new Date(), 'YYYY.MM.DD')}
      />

      <div className={COMMON_CLASS.flexCenterBetween}>
        <LineChart data={BODY_FAT_DATA} width={910} height={220} right={30} />
      </div>

      <div className="absolute bottom-[16px] left-[32px] flex gap-x-[16px]">
        {FILTER_GRAPH.map(item => (
          <Button
            key={item.value}
            className={
              item.value === currentFilter
                ? 'bg-primary-300 text-light'
                : 'bg-light text-primary-300'
            }
            variant="graph"
            onClick={() => handleFilterClick(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

BodyGraph.displayName = 'BodyGraph';
