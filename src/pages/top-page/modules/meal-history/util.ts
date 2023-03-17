import { IMealHistoryResponse } from '@/api/queries';
import { getDateWithFormat } from '@/utils/date-format';

interface IMealHistory {
  id: string;
  image: string;
  date: string;
}

export const convertDataMealHistories = (
  data: IMealHistoryResponse[][] | undefined
): IMealHistory[] => {
  if (!data) {
    return [];
  }

  const mealHistories: IMealHistory[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, image, types, createdAt } = data[i][j];
      const date = `${getDateWithFormat(createdAt, 'MM.DD')}.${types.name}`;
      mealHistories.push({
        id,
        image,
        date,
      });
    }
  }

  return mealHistories;
};
