import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from './redux/store';
import useManageData from './firebase/useManageData';
import AppRoutes from './routing/Routes';

const App = () => {
  const { uid } = useSelector(getUser);
  const { listenToIncomesChanges } = useManageData();

  const isUserLoggedIn = !!uid;

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [isUserLoggedIn]);

  return (
    <>
      <h1>The Budget project</h1>

      <AppRoutes />
    </>
  );
};

export default App;
