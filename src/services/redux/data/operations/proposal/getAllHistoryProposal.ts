import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllHistoryProposalsAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllHistoryProposal = createAsyncThunk(
  'data/getAllHistoryProposal',
  asyncThunkDecoratorData(async (signal: any) => {
    const { data } = await getAllHistoryProposalsAPI(signal);
    return data;
  })
);
