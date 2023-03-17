import classNames from 'classnames';
import * as React from 'react';

import { Button } from '../common';
import styles from './filter-button.module.css';

export interface IFilterProps {
  icon: React.ReactNode | JSX.Element;
  name: string;
  onFilter: () => void;
}

const classes = {
  root: 'flex-col font-inter font-normal text-xl leading-6 before:absolute relative',
} as const;

export const FilterButton: React.FC<IFilterProps> = ({
  icon,
  name,
  onFilter,
}: IFilterProps) => {
  const classesName = classNames(styles['filter-button'], classes.root);

  return (
    <Button className={classesName} variant="custom" onClick={onFilter}>
      {icon}
      {name}
    </Button>
  );
};

FilterButton.displayName = 'FilterButton';
