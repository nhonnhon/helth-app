import * as React from 'react';

export type IProps = {
  hashTags: string[];
};

export const NewsHashTag: React.FC<IProps> = ({ hashTags }: IProps) => {
  return (
    <div className="flex gap-3">
      {hashTags.map((tag, index) => (
        <span
          key={index}
          className="text-[12px] font-light leading-[22px] tracking-[.06px] text-primary-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

NewsHashTag.displayName = 'NewsHashTag';
