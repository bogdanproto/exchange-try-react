import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

export const setSuccesMsgDefault = (
  state: ISliceData,
  action: PayloadAction<null>
) => {
  state.succesMsg = action.payload;
};
