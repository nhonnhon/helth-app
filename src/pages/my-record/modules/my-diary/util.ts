import { IMyDiaryResponse } from '@/api/queries';
import { getDateWithFormat } from '@/utils/date-format';

import { IDiaryItemProps } from './my-diary-item';

type IMyDiaryDto = IDiaryItemProps;

export const convertDataDiaries = (
  data: IMyDiaryResponse[][] | undefined
): IMyDiaryDto[] => {
  if (!data) {
    return [];
  }

  const myDiaries: IMyDiaryDto[] = [];
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
