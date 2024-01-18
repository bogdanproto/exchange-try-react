import dayjs from 'dayjs';

export const getDifferenceYears = (startData: any): string => {
  const years = -1 * dayjs(startData).diff(dayjs(), 'year');

  return years < 1
    ? 'less than 1 year'
    : years === 1
    ? '1 year'
    : `${years} years`;
};
