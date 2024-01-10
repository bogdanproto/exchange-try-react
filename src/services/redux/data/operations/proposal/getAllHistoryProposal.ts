import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllHistoryProposalsAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllHistoryProposal = createAsyncThunk(
  'data/getAllHistoryProposal',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllHistoryProposalsAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
