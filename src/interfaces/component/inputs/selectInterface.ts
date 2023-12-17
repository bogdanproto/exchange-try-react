export interface ISelect {
  id: string;
  label: string;
}

export interface HFAutocompleateProps {
  control: any;
  multiple: boolean;
  name: string;
  label: string;
  options: ISelect[];
}

export interface HFSelectProps {
  control: any;
  multiple: boolean;
  name: string;
  label: string;
  options: Map<string, string>;
}
