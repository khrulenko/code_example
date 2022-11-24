import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from './redux/store';
import useManageData from './firebase/useManageData';
import { useLocation, useNavigate } from 'react-router-dom';
import { URL_AUTH_LOGIN, URL_HOME } from './routing/URLs';
import AppRoutes from './routing/Routes';

const App = () => {
  const { uid, loading } = useSelector(getUser);
  const navigate = useNavigate();
  const { listenToIncomesChanges } = useManageData();

  const isUserLoggedIn = !!uid;

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (isUserLoggedIn && !loading) {
      navigate(URL_HOME, { replace: true });
    }

    if (!isUserLoggedIn && !loading) {
      navigate(URL_AUTH_LOGIN, { replace: true });
    }
  }, [isUserLoggedIn, loading]);

  const location = useLocation();

  console.log('---location:', location);
  console.log('isUserLoggedIn:', isUserLoggedIn);
  console.log('user.loading:', loading);

  return (
    <>
      <h1>The Budget project</h1>

      <AppRoutes />
    </>
  );
};

export default App;
