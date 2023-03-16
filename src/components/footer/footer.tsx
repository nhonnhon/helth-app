import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { FOOTER_LIST } from '@/configs/footer';

export const Footer: React.FC = () => {
  return (
    <footer className="flex h-[128px] w-full items-center bg-dark-500">
      <div className="mx-auto flex w-[60rem] items-center gap-[2.75rem]">
        {FOOTER_LIST.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={`text-[11px] font-light leading-4 tracking-[.033px] text-light`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
