import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceAuthUser } from 'interfaces';

export const setSuccesMsgUserDefault = (
  state: ISliceAuthUser,
  action: PayloadAction<null>
) => {
  state.successMsg = action.payload;
};
