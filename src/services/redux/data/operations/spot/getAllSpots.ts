import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllSpotAPI } from 'services/api/spot/spotAPI';
import { handleErrors } from 'services/helpers';

export const getAllSpots = createAsyncThunk(
  'data/getAllSpots',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllSpotAPI();
      return data.spots;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
