import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllSpotAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllSpots = createAsyncThunk(
  'data/getAllSpots',
  asyncThunkDecoratorData(async () => {
    const { data } = await getAllSpotAPI();
    return data.spots;
  })
);
