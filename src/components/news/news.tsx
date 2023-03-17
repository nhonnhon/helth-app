import * as React from 'react';

type IProps = {
  title: string;
  image: string;
  time?: React.ReactNode;
  hashTags?: React.ReactNode;
};

export const News: React.FC<IProps> = ({
  title,
  image,
  time,
  hashTags,
}: IProps) => {
  return (
    <article className="flex w-[234px] flex-col">
      <figure className="relative h-[145px] w-[234px]">
        <picture>
          <img
            src={image}
            alt={title}
            className="h-[145px] w-[234px] object-cover"
          />
        </picture>

        {time}
      </figure>

      <h3 className="mt-[8px] text-[15px] font-light leading-[22px] tracking-[.075px] line-clamp-2">
        {title}
      </h3>

      {hashTags}
    </article>
  );
};

News.displayName = 'News';
