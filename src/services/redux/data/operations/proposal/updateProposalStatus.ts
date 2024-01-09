import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalUpdStatus } from 'interfaces';
import { updateProposalStatusAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const updateProposalStatus = createAsyncThunk(
  'data/updateProposalStatus',
  async (obj: IProposalUpdStatus, thunkAPI) => {
    try {
      const { data } = await updateProposalStatusAPI(obj);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
