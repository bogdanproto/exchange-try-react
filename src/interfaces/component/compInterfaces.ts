export interface IPropsPages {
  redirectTo: string;
  component: React.ReactElement;
}

type AlertColor = 'error' | 'warning' | 'info' | 'success';

export interface IPropsNotification {
  type: AlertColor;
  message: string;
}
