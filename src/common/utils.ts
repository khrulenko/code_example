import { FBUser } from '../redux/slices/userSlice';

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

export {
  getUserData,
  getCurrentISODate,
  createUrl,
  handleChange,
  getShouldNotForvardRule,
};
