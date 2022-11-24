import { createUrl } from '../common/utils';

//home page
export const URL_HOME: string = '/home';

//auth
export const URL_AUTH: string = 'auth';
export const URL_LOGIN: string = 'login';
export const URL_REGISTRATION: string = 'registration';

export const URL_AUTH_LOGIN: string = createUrl(URL_AUTH, URL_LOGIN);
export const URL_AUTH_REGISTRATION: string = createUrl(
  URL_AUTH,
  URL_REGISTRATION
);
