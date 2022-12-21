import { FBUser } from '../redux/slices/userSlice';
import { StringObject } from './types';

const getUserData = (user: FBUser) => {
  if (!user) return user;

  return { uid: user.uid, email: user.email as string };
};

const getCurrentISODate = () => {
  //format YYYY-MM-DD
  const currentDate = new Date();

  return currentDate.toISOString().split('T')[0];
};

const createUrl = (...pathes: string[]): string => pathes.join('/');

const handleChange =
  (action: any) =>
  ({ target: { value } }: any) => {
    action(value);
  };

const getShouldNotForvardRule = (...propNames: PropertyKey[]) => {
  return {
    shouldForwardProp: (prop: PropertyKey) => !propNames.includes(prop),
  };
};

const isObjEmpty = (object: object): boolean =>
  Object.keys(object).length === 0;

const getErrorProps = (name: string, errors: StringObject) => ({
  error: Boolean(errors?.[name]),
  helperText: errors?.[name],
});

const getDeleteCallback =
  (key: string) =>
  ({ [key]: remove, ...rest }) =>
    rest;

export {
  getUserData,
  getCurrentISODate,
  createUrl,
  handleChange,
  getShouldNotForvardRule,
  isObjEmpty,
  getErrorProps,
  getDeleteCallback,
};
