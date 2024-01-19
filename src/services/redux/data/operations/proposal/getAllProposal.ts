import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParamsProposals } from 'interfaces';
import { getAllProposalsAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllProposal = createAsyncThunk(
  'data/getAllProposals',
  asyncThunkDecoratorData(async (filter: IParamsProposals) => {
    const {
      data: { proposals, page, limit, total },
    } = await getAllProposalsAPI(filter);
    return {
      items: proposals,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      total,
    };
  })
);
