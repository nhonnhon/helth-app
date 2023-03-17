import * as React from 'react';

import { BoxCategory } from '@/components/box-category';
import { NAVBAR_HEIGHT } from '@/configs/menu';
import { MY_RECORD_SECTIONS } from '@/constants/my-record.constant';

export const SectionButton: React.FC = () => {
  const ScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.pageYOffset -
          NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mx-auto flex w-full justify-between">
      {MY_RECORD_SECTIONS.map((s, i) => (
        <BoxCategory
          key={i}
          image={s.image}
          name={s.name}
          description={s.description}
          onClick={() => ScrollToSection(s.scrollTo)}
        />
      ))}
    </div>
  );
};

SectionButton.displayName = 'SectionButton';
