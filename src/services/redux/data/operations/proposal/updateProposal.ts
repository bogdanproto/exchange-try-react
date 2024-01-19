import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { updateProposalAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const updateProposal = createAsyncThunk(
  'data/updateProposal',
  asyncThunkDecoratorData(async (objProposal: IProposalCreate) => {
    const { data } = await updateProposalAPI(objProposal);
    return data;
  })
);
