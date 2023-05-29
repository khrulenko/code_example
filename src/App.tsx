import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { getUser } from './redux/store';
import useManageData from './firebase/useManageData';
import AppRoutes from './routing/Routes';
import { endLoadingUser, setUser } from './redux/slices/userSlice';
import { getUserData } from './common/utils';
import { auth } from './firebase/firebaseInit';
import Loader from './ui/components/Loader';
import { startLoadingIncomes } from './redux/slices/incomesSlice';

const App = () => {
  const dispatch = useDispatch();
  const { uid, loading } = useSelector(getUser);
  const { listenToIncomesChanges } = useManageData();

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [uid]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(getUserData(user)));
      dispatch(startLoadingIncomes());
      dispatch(endLoadingUser());
    });

    return unsubscribe;
  }, []);

  if (loading) return <Loader />;

  return <AppRoutes />;
};

export default App;
