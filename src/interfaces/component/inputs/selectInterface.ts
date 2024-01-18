export interface ISelect {
  id: string;
  label: string;
}

export interface IAutocomplete {
  _id: string;
  spot: string;
}

export interface HFAutocompleateProps {
  control: any;
  multiple?: boolean;
  name: string;
  label: string;
  options: IAutocomplete[];
  defaultValue?: IAutocomplete;
}

export interface HFSelectProps {
  control: any;
  multiple: boolean;
  name: string;
  label: string;
  placeholder: string;
  options: Map<string, string>;
  defaultValue?: string[] | string;
}
