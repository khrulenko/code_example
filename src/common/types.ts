import { CSSObject, Theme } from '@mui/material';

export type StringObject = { [key: string]: string };
export type AnyFunction = (...args: any[]) => any;
export type OwnerStateWithTheme<T> = { theme: Theme } & { ownerState: T };
export type StyleFunction<T> = ({}: { theme: Theme } & T) => CSSObject;
