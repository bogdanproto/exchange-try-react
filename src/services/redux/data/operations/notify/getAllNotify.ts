import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParams } from 'interfaces';
import { getAllNotifyAPI } from 'services/api';

import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllNotify = createAsyncThunk(
  'data/getAllNotify',
  asyncThunkDecoratorData(async (pagination: IParams) => {
    const { data } = await getAllNotifyAPI(pagination);
    return {
      ...data,
      page: parseInt(data.page, 10),
      limit: parseInt(data.limit, 10),
    };
  })
);
