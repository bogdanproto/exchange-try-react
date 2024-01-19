import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalUpdStatus } from 'interfaces';
import { updateProposalStatusAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const updateProposalStatus = createAsyncThunk(
  'data/updateProposalStatus',
  asyncThunkDecoratorData(async (obj: IProposalUpdStatus) => {
    const { data } = await updateProposalStatusAPI(obj);
    return data;
  })
);
