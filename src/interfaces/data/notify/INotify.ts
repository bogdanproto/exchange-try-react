export type NotifyStatus = 'viewed' | 'notviewed';

export interface INotify {
  _id: string;
  initiator: {
    _id: string;
    name: string;
    avatarCloudURL: string | null;
  };
  message: string;
  statusNotify: NotifyStatus;
  createdAt: string;
}

export interface INotifys {
  items: INotify[] | [];
  page: number | null;
  limit: number | null;
  total: number | null;
  totalNotViewed: number | null;
}
