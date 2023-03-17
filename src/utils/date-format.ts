import dayjs from 'dayjs';

export const getOneYearFromCurrent = (): string[] => {
  let current = dayjs();

  const months = [current.format('M')];

  for (let i = 0; i < 11; i++) {
    current = current.add(1, 'month');
    months.push(current.format('M'));
  }

  return months;
};

export function getDateWithFormat(
  date: string | Date,
  formatDate: string
): string {
  return dayjs(date).format(formatDate);
}
