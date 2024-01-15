import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParamsProposals } from 'interfaces';
import { getAllProposalsAPI } from 'services/api';
import { handleErrors } from 'services/helpers';

export const getAllProposal = createAsyncThunk(
  'data/getAllProposals',
  async (filter: IParamsProposals, thunkAPI) => {
    try {
      const {
        data: { proposals, page, limit, total },
      } = await getAllProposalsAPI(filter);
      return {
        items: proposals,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
