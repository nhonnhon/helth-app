import * as React from 'react';

import { SECTION_CATEGORIES } from '@/constants/column-page.constant';

export const SectionCategories: React.FC = () => {
  return (
    <div className="flex w-full justify-between">
      {SECTION_CATEGORIES.map(({ id, name, caption }) => (
        <button
          key={id}
          className="flex h-[144px] w-[216px] flex-col items-center bg-dark-600 px-[8px] pt-[24px] pb-[22px]"
        >
          <h2 className="text-center font-inter text-[1.375rem] uppercase leading-[1.688rem] tracking-[0.11px] text-primary-300">
            {name}
          </h2>
          <div className="mt-[10px] mb-[8px] h-[1px] w-[56px] border-t border-white"></div>
          <p className="text-center text-[1.125rem] font-light leading-[1.625rem] text-white">
            {caption}
          </p>
        </button>
      ))}
    </div>
  );
};

SectionCategories.displayName = 'SectionCategories';
