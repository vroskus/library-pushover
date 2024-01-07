export type $Config = {
  apiToken: string;
  onError?: () => unknown;
  userKey: string;
};

export type $Message = {
  message: string;
  sound?: 'cashregister' | 'falling' | 'pushover' | 'siren';
  title?: string;
  url?: string;
  urlTitle?: string;
};

export type $Result = {
  errors: Array<string>;
  request: string;
  status: number;
  token: string;
};
