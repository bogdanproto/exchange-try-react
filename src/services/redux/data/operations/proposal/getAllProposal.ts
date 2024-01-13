import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParamsProposals } from 'interfaces';
import { getAllProposalsAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllProposal = createAsyncThunk(
  'data/getAllProposals',
  async (filter: IParamsProposals, thunkAPI) => {
    try {
      const { data } = await getAllProposalsAPI(filter);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
