export type $Config = {
  userKey: string;
  apiToken: string;
  onError?: () => unknown;
};

export type $Message = {
  message: string;
  sound?: 'pushover' | 'falling' | 'siren' | 'cashregister';
  title?: string;
  url?: string;
  urlTitle?: string;
};

export type $Result = {
  token: string;
  errors: Array<string>;
  status: number;
  request: string;
};
