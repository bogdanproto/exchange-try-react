import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateStatusNotifyToViewedAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const updateStatusNotifyToViewed = createAsyncThunk(
  'data/updateStatusNotifyToViewed',
  asyncThunkDecoratorData(async () => {
    const {
      data: { totalNotViewed },
    } = await updateStatusNotifyToViewedAPI();
    return totalNotViewed;
  })
);
