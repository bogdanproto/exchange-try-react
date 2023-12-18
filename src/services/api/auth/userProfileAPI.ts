import { routeAuthAPI } from 'const/routeAPI/auth';
import { exchangeAPI } from '../axiosConf/axiosConf';
import {
  IEqptId,
  IEqptItemForm,
  IUserProfile,
} from 'interfaces/user/userInterface';

export const updateUserAvatar = async (file: File | null): Promise<any> => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append('avatar', file);

  const { data } = await exchangeAPI.patch(routeAuthAPI.AVATAR, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export const updateUserProfile = async (
  objProfile: IUserProfile
): Promise<any> => {
  const { data } = await exchangeAPI.patch(routeAuthAPI.PROFILE, objProfile);
  return data;
};

export const updateUserEqpts = async (objEqpt: IEqptItemForm): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAuthAPI.EQPTS, objEqpt);
  return data;
};

export const deleteUserEqpt = async ({ _id }: IEqptId): Promise<any> => {
  const { data } = await exchangeAPI.delete(`${routeAuthAPI.EQPTS}/${_id}`);
  return data;
};
