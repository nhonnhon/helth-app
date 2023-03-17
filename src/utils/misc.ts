export const getRandomItemInArray = (items: any[]): any => {
  return items[Math.floor(Math.random() * items.length)];
};

export const getRandomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export function addPaginationAndFilter(
  items: any[],
  pageSize: number,
  page: number,
  filterId?: string
): any[] {
  if (filterId) {
    const itemWithFilter = items.filter(i => i.types.id === filterId);
    return itemWithFilter.length
      ? itemWithFilter.slice((page - 1) * pageSize, page * pageSize)
      : [];
  }
  return items.slice((page - 1) * pageSize, page * pageSize);
}
