import * as React from 'react';

import { COMMON_CLASS } from '@/constants/class.constant';

type IProps = {
  image: string;
  name: string;
  description: string;
  onClick: () => void;
};

export const BoxCategory: React.FC<IProps> = ({
  image,
  name,
  description,
  onClick,
}: IProps) => {
  return (
    <button
      className={`relative h-[288px] w-[288px] flex-col ${COMMON_CLASS.flexCenterBetween}`}
      onClick={onClick}
    >
      <picture className="absolute z-[1] bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[1] before:border-[24px] before:border-solid before:border-primary-300">
        <img
          src={image}
          alt={name}
          className="h-[288px] w-[288px] object-cover object-left-top opacity-25 mix-blend-luminosity hover:object-scale-down"
        />
      </picture>

      <div
        className={`relative z-[2] flex-col ${COMMON_CLASS.flexCenterBetween}`}
      >
        <h2 className="font-inter text-[25px] uppercase leading-[30px] tracking-[.125px] text-primary-300">
          {name}
        </h2>
        <div
          className={`mt-[10px] h-[24px] w-[160px] ${COMMON_CLASS.flexCenterBetween} bg-primary-400`}
        >
          <p className="text-[14px] font-light leading-[20px] text-light">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

BoxCategory.displayName = 'BoxCategory';
