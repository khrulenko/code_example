import { CSSObject, Theme } from '@mui/material';
import store from '../redux/store';
import { Currencies } from './constants';

export type AppDispatch = typeof store.dispatch;
export type StringObject = { [key: string]: string };
export type AnyFunction = (...args: any[]) => any;
export type OwnerStateWithTheme<T> = { theme: Theme } & { ownerState: T };

export type StyleFunction<T> = (
  themeAndProps: { theme: Theme } & T
) => CSSObject;

export type CurrencyColors = {
  [key in Currencies]: string;
};
