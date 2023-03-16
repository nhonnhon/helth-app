import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/assets/images/logo.svg';
import { ChallengeIcon, InfoIcon, MemoIcon } from '@/components/icons';
import { ROUTE_PATHS } from '@/routes/routes';

import { Badge } from '../common';
import { Link } from './link';
import { Menu } from './menu';

const flexBetweenCenter = 'flex items-center justify-between';
const flexCenter = 'flex items-center';
const lineHeightLink = 'leading-[23px]';

export const Navbar: React.FC = () => {
  return (
    <nav className={`h-[64px]`}>
      <div
        className={`${flexBetweenCenter} fixed top-0 z-30 h-[64px] w-full bg-dark-500`}
      >
        <div className={`${flexBetweenCenter} mx-auto w-9/12`}>
          <div className={`${flexBetweenCenter} w-full gap-16`}>
            <NavLink to={'/'}>
              <img alt="logo" src={Logo} />
            </NavLink>

            <div className={`${flexCenter} w-full justify-end`}>
              <div className={`${flexCenter} gap-8`}>
                <Link
                  to={ROUTE_PATHS.MY_RECORDS}
                  label="自分の記録"
                  icon={<MemoIcon />}
                  className={lineHeightLink}
                />
                <Link
                  to={ROUTE_PATHS.CHALLENGES}
                  label="チャレンジ"
                  icon={<ChallengeIcon />}
                  className={lineHeightLink}
                />
                <Link
                  to={ROUTE_PATHS.NOTIFICATIONS}
                  label="お知らせ"
                  className={lineHeightLink}
                  icon={
                    <Badge count={1}>
                      <InfoIcon />
                    </Badge>
                  }
                />
              </div>

              <div className="ml-[72px]">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
