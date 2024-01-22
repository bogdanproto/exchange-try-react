export enum NotifyStatus {
  viewed = 'viewed',
  notviewed = 'notviewed',
}

export interface INotify {
  _id: string;
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
