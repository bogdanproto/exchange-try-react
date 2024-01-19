import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { createProposalAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const createProposal = createAsyncThunk(
  'data/createProposal',
  asyncThunkDecoratorData(async (obj: IProposalCreate) => {
    const { data } = await createProposalAPI(obj);
    return data;
  })
);
