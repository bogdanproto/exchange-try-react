import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { createProposalAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const createProposal = createAsyncThunk(
  'data/createProposal',
  async (obj: IProposalCreate, thunkAPI) => {
    try {
      const { data } = await createProposalAPI(obj);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
