import { routeAPI } from 'const/routeAPI/auth';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const updateUserAvatar = async (file: File | null): Promise<any> => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append('avatar', file);

  const { data } = await exchangeAPI.patch(routeAPI.AVATAR, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
