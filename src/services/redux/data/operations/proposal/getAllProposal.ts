import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProposalsAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllProposal = createAsyncThunk(
  'data/getAllProposals',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllProposalsAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
