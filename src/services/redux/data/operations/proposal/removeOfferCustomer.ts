import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeOfferCustomerAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const removeOfferCustomer = createAsyncThunk(
  'data/removeOfferCustomer',
  asyncThunkDecoratorData(async (id: String) => {
    const { data } = await removeOfferCustomerAPI(id);
    return data;
  })
);
