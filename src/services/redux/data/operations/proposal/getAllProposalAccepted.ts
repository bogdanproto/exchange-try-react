import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';
import { getAllProposalByStatusAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllProposalAccepted = createAsyncThunk(
  'data/getAllProposalAccepted',
  asyncThunkDecoratorData(async (signal: any) => {
    const { data } = await getAllProposalByStatusAPI({
      status: ProposalStatusBack.accepted,
      signal,
    });
    return data;
  })
);
