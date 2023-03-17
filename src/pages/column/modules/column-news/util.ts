import { IColumnNewsResponse } from '@/api/queries';
import { getDateWithFormat } from '@/utils/date-format';

type IColumnNews = Omit<IColumnNewsResponse, 'createdAt'> & {
  date: string;
  time: string;
};

export const convertDataColumnNews = (
  data: IColumnNewsResponse[][] | undefined
): IColumnNews[] => {
  if (!data) {
    return [];
  }

  const news: IColumnNews[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, title, createdAt, image, hashTags } = data[i][j];
      news.push({
        id,
        title,
        date: getDateWithFormat(createdAt, 'YYYY.MM.DD'),
        time: getDateWithFormat(createdAt, 'HH:mm'),
        hashTags,
        image,
      });
    }
  }

  return news;
};
