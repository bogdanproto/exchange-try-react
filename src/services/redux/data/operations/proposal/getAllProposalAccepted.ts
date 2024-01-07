import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProposalByStatusAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllProposalAccepted = createAsyncThunk(
  'data/getAllProposalAccepted',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllProposalByStatusAPI('accepted');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
