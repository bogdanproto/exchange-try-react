import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParams } from 'interfaces';
import { getAllNotifyAPI } from 'services/api';

import { asyncThunkDecoratorData } from 'services/helpers';

export const getQntUnviewedNotify = createAsyncThunk(
  'data/getQntUnviewedNotify',
  asyncThunkDecoratorData(async (pagination?: IParams) => {
    const {
      data: { totalNotViewed },
    } = await getAllNotifyAPI(pagination ?? { page: 1, limit: 100 });
    return totalNotViewed;
  })
);
