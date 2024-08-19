// Helpers
import Push from 'pushover-notifications';

// Types
import type {
  $Config as Config,
  $Message as Message,
  $Result as Result,
} from './types';

type $Payload = {
  message: string;
  sound?: string;
  title?: string;
  url?: string;
  url_title?: string;
};

type $Pushover = {
  send: (arg0: $Payload, arg1: (arg10: Error | void, arg11: Result) => void) => void;
};

export type $Config = Config;
export type $Message = Message;
export type $Result = Result;

class PushoverService<C extends $Config> {
  instance: $Pushover;

  constructor({
    apiToken,
    onError,
    userKey,
  }: C) {
    this.instance = {
      send: (message, callback) => {
        // eslint-disable-next-line no-console
        console.log(
          'Pushover: ',
          message,
        );

        const result = {
          errors: [],
          request: '1',
          status: 0,
          token: '',
        };

        callback(
          undefined,
          result,
        );
      },
    };

    if (userKey !== '' && apiToken !== '') {
      const config = {
        onerror: onError || (() => {}),
        token: apiToken,
        user: userKey,
      };

      this.instance = new Push(config);
    }
  }

  send(message: $Message): Promise<Result> {
    return new Promise((resolve, reject) => {
      const payload: $Payload = {
        message: message.message,
        sound: message.sound || 'falling',
        title: message.title,
        url: message.url,
        url_title: message.urlTitle,
      };

      this.instance.send(
        payload,
        (error, result) => {
          if (error) {
            reject(error);
          }

          resolve(result);
        },
      );
    });
  }
}

export default PushoverService;
