import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeOfferCustomerAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const removeOfferCustomer = createAsyncThunk(
  'data/removeOfferCustomer',
  async (id: String, thunkAPI) => {
    try {
      const { data } = await removeOfferCustomerAPI(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
