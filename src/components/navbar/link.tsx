import classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  to: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

const classes = {
  link: 'flex items-center gap-2 text-light font-light',
};

export const Link: React.FC<LinkProps> = ({
  to,
  icon,
  label,
  className,
}: LinkProps) => {
  return (
    <NavLink to={to} className={classNames(classes.link, className)}>
      {icon} {label}
    </NavLink>
  );
};

Link.displayName = 'Link';
