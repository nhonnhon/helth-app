import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const FooterItem = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <NavLink
        ref={ref}
        {...rest}
        className={`text-[11px] font-light leading-4 tracking-[.033px] text-light`}
      >
        {children}
      </NavLink>
    );
  }
);

FooterItem.displayName = 'FooterItem';
