import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProposalByStatusAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllProposalPending = createAsyncThunk(
  'data/getAllProposalPending',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllProposalByStatusAPI('reservation');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
