import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { updateProposalAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const updateProposal = createAsyncThunk(
  'data/upgradeProposal',
  async (objProposal: IProposalCreate, thunkAPI) => {
    try {
      const { data } = await updateProposalAPI(objProposal);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
