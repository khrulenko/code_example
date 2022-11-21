import { FBUser } from "../redux/slices/userSlice";

const getUserData = (user: FBUser) => {
  if (!user) return user;

  return { uid: user.uid, email: user.email as string };
};

const getCurrentISODate = () => {
  //format YYYY-MM-DD
  const currentDate = new Date();

  return currentDate.toISOString().split('T')[0];
};

export { getUserData, getCurrentISODate };
