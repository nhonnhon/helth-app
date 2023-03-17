import * as React from 'react';

import { AchievementRate, BodyFat } from './modules';
import { MealHistory } from './modules/meal-history';

const TopPage: React.FC = () => {
  return (
    <div className="">
      <div className="mx-auto flex lg:max-w-[1280px]">
        <AchievementRate />
        <BodyFat />
      </div>
      <MealHistory />
    </div>
  );
};

TopPage.displayName = 'TopPage';

export default TopPage;
