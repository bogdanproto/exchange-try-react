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

// export const getAllProposal = createAsyncThunk(
//   'data/getAllProposals',
//   async (filter: IParamsProposals, thunkAPI) => {
//     try {
//       const {
//         data: { proposals, page, limit, total },
//       } = await getAllProposalsAPI(filter);
//       return {
//         items: proposals,
//         page: parseInt(page, 10),
//         limit: parseInt(limit, 10),
//         total,
//       };
//     } catch (error: any) {
//       if (error.response?.data.code === 'user_unauthorized_token') {
//         thunkAPI.dispatch(toSetErrorAuth());
//       }
//       return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
//     }
//   }
// );
