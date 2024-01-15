import dayjs from 'dayjs';

export const getRestOfDays = (endData: any): String => {
  const daysRest = dayjs(endData).diff(dayjs(), 'day');
  const isToday = dayjs().isSame(endData, 'day');

  return isToday
    ? 'today'
    : daysRest === 0
    ? `tomorrow`
    : daysRest === 1
    ? `${daysRest} day left`
    : `${daysRest} days left`;
};
