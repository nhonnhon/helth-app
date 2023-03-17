import * as React from 'react';

import { ArrowUpIcon } from '@/components/icons';
import { COMMON_CLASS } from '@/constants/class.constant';
import { COLOR_CONST } from '@/constants/color.constant';

const HEIGHT_NAVBAR = 300;

export const ScrollTop: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > HEIGHT_NAVBAR) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
        setIsHover(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMouseOver = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(true);
  };

  const handleMouseOut = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(false);
  };

  const handleOnFocus = (evt: React.FocusEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(true);
  };

  const handleOnBlur = (evt: React.FocusEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(false);
  };

  return showScrollBtn ? (
    <button
      className={`fixed bottom-[160px] right-[96px] h-[48px] w-[48px] ${COMMON_CLASS.flexCenterBetween} rounded-[50%] border border-gray-400 hover:border-none hover:bg-primary-400`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onClick={goToTop}
    >
      <ArrowUpIcon fill={isHover ? '#FFFFFF' : COLOR_CONST.gray_400} />
    </button>
  ) : null;
};

ScrollTop.displayName = 'ScrollTop';
