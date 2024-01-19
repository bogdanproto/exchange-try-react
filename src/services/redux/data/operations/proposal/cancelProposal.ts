import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCancel } from 'interfaces';
import { cancelProposalAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const cancelProposal = createAsyncThunk(
  'data/cancelProposal',
  asyncThunkDecoratorData(async (obj: IProposalCancel) => {
    const { data } = await cancelProposalAPI(obj);
    return data;
  })
);
