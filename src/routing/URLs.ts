import { createUrl } from '../common/utils';

const APP_NAME: string = '/thebudget';

//home page
const HOME: string = 'home';
export const URL_HOME: string = createUrl(APP_NAME, HOME);

//auth
const AUTH: string = 'auth';
const LOGIN: string = 'login';
const REGISTRATION: string = 'registration';

export const URL_AUTH: string = createUrl(APP_NAME, AUTH);
export const URL_AUTH_LOGIN: string = createUrl(URL_AUTH, LOGIN);
export const URL_AUTH_REGISTRATION: string = createUrl(URL_AUTH, REGISTRATION);
