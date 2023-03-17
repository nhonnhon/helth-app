import * as React from 'react';

import d01 from '@/assets/images/d01.jpg';

import { AchievementCircle } from './achievement-circle';

export const AchievementRate: React.FC = () => {
  return (
    <div className="relative z-[1] h-[312px] w-[540px] before:absolute before:inset-0 before:bg-achievement-bg before:mix-blend-soft-light">
      <img
        alt="Achievement"
        src={d01}
        className="h-[312px] w-full object-cover"
      />

      <AchievementCircle percentage={75} date={'5/21'} />
    </div>
  );
};

AchievementRate.displayName = 'AchievementRate';
