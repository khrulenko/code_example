import { createUrl } from '../common/utils';

//home page
export const URL_HOME: string = '/home';

//auth
export const URL_AUTH: string = '/auth';
const LOGIN: string = 'login';
const REGISTRATION: string = 'registration';

export const URL_AUTH_LOGIN: string = createUrl(URL_AUTH, LOGIN);
export const URL_AUTH_REGISTRATION: string = createUrl(URL_AUTH, REGISTRATION);
