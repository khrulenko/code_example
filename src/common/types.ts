import { CSSObject, Theme } from '@mui/material';

export type AnyFunction = (...args: any[]) => any;
export type PropsWithTheme<T = any> = { theme: Theme } & T;
export type StyleFunction<T = any> = ({}: PropsWithTheme<T>) => CSSObject;
