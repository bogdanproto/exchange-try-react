import { IUserView } from 'interfaces/user/userInterface';

export interface IProposal {
  _id: string;
  ownerId: IUserView;
}
