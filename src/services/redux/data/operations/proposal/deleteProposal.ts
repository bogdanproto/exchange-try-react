import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteProposalAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const deleteProposal = createAsyncThunk(
  'data/deleteProposal',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await deleteProposalAPI(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
