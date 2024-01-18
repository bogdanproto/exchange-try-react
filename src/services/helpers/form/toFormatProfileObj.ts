import dayjs from 'dayjs';
import { IProfileForm, IUserProfile } from 'interfaces';

export const toFormatProfilelObj = ({
  name,
  phone,
  experience,
}: IProfileForm): IUserProfile => ({
  name,
  ...(phone ? { phone } : {}),
  ...(experience ? { experience: dayjs(experience).format('YYYY-MM-DD') } : {}),
});
