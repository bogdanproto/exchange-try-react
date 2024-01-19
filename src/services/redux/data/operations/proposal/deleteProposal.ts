import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteProposalAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const deleteProposal = createAsyncThunk(
  'data/deleteProposal',
  asyncThunkDecoratorData(async (id: string) => {
    const { data } = await deleteProposalAPI(id);
    return data;
  })
);
