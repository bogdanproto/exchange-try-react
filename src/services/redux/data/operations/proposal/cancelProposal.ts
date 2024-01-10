import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCancel } from 'interfaces';
import { cancelProposalAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const cancelProposal = createAsyncThunk(
  'data/cancelProposal',
  async (obj: IProposalCancel, thunkAPI) => {
    try {
      const { data } = await cancelProposalAPI(obj);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
