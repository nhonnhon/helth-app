import * as React from 'react';

import { Button } from '../common';

interface IProps {
  disabled: boolean;
  isFetchingNextPage: boolean;
  onClick: () => void;
}

export const ButtonLoadMore: React.FC<IProps> = ({
  disabled,
  onClick,
  isFetchingNextPage,
}: IProps) => {
  return (
    <Button
      className="mt-[26px] self-center"
      disabled={disabled}
      onClick={onClick}
    >
      {isFetchingNextPage ? '読み込み中...' : 'コラムをもっと見る'}
    </Button>
  );
};

ButtonLoadMore.displayName = 'ButtonLoadMore';
