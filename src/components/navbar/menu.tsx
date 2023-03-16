import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import * as React from 'react';

import { CloseIcon, MenuIcon } from '@/components/icons';
import { MENU_LIST } from '@/configs/menu';

import { MenuItem } from './menu-item';

export const Menu: React.FC = () => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      <div className="h-[2rem] w-[2rem]">
        <HeadlessMenu.Button className="inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {({ open }) => {
            return open ? <CloseIcon /> : <MenuIcon />;
          }}
        </HeadlessMenu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HeadlessMenu.Items className="absolute right-0 w-[17.5rem] bg-gray-400 focus:outline-none">
          {MENU_LIST.map(({ href, label }, index) => {
            return (
              <HeadlessMenu.Item key={index}>
                <MenuItem to={href}>{label}</MenuItem>
              </HeadlessMenu.Item>
            );
          })}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
};

Menu.displayName = 'Menu';
