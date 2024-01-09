import dayjs from 'dayjs';

export const getRestOfDays = (endData: any): String => {
  const daysRest = dayjs(endData).diff(dayjs(), 'day');

  return daysRest <= 0
    ? 'today'
    : `${daysRest < 1 ? `tomorrow` : `${daysRest} days left`}`;
};
