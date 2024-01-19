import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalUpdbyCustomer } from 'interfaces/data/proposal/IProposal';
import { updateProposalByCustomerAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const updateProposalByCustomer = createAsyncThunk(
  'data/updateProposalByCustomer',
  asyncThunkDecoratorData(async (obj: IProposalUpdbyCustomer) => {
    const { data } = await updateProposalByCustomerAPI(obj);
    return data;
  })
);
