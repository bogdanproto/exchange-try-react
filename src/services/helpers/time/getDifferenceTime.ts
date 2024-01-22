import dayjs from 'dayjs';

export const getDifferenceTime = (pastTime: any): String => {
  const timeDifference = dayjs().diff(dayjs(pastTime), 'minute');

  const our = 60;
  const day = our * 24;
  const week = day * 7;

  return timeDifference < our
    ? `${timeDifference}m`
    : timeDifference < day
    ? `${Math.floor(timeDifference / our)}h`
    : timeDifference > day && timeDifference < week
    ? `${Math.floor(timeDifference / day)}d`
    : `${Math.floor(timeDifference / week)}w`;
};
