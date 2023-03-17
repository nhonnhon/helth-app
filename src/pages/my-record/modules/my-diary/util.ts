import { IMyDiaryResponse } from '@/api/queries';
import { getDateWithFormat } from '@/utils/date-format';

import { IDiaryItemProps } from './my-diary-item';

type IMyDiary = IDiaryItemProps;

export const convertDataDiaries = (
  data: IMyDiaryResponse[][] | undefined
): IMyDiary[] => {
  if (!data) {
    return [];
  }

  const myDiaries: IMyDiary[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, title, description, createdAt } = data[i][j];
      myDiaries.push({
        id,
        description,
        title,
        date: getDateWithFormat(createdAt, 'YYYY.MM.DD'),
        time: getDateWithFormat(createdAt, 'HH:mm'),
      });
    }
  }

  return myDiaries;
};
