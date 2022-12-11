import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/store';
import useManageData from './firebase/useManageData';
import AppRoutes from './routing/Routes';
import { onAuthStateChanged } from 'firebase/auth';
import { endLoadingUser, setUser } from './redux/slices/userSlice';
import { getUserData } from './common/utils';
import { auth } from './firebase/firebaseInit';

const App = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector(getUser);
  const { listenToIncomesChanges } = useManageData();
  const isUserLoggedIn = !!uid;

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [isUserLoggedIn]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(getUserData(user)));
      dispatch(endLoadingUser());
    });

    return unsubscribe;
  }, []);

  return <AppRoutes />;
};

export default App;
