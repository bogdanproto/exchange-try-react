import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalUpdbyCustomer } from 'interfaces/data/proposal/IProposal';
import { updateProposalByCustomerAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const updateProposalByCustomer = createAsyncThunk(
  'data/updateProposalByCustomer',
  async (obj: IProposalUpdbyCustomer, thunkAPI) => {
    try {
      const { data } = await updateProposalByCustomerAPI(obj);
      console.log(data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
