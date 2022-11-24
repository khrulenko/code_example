import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from './redux/store';
import useManageData from './firebase/useManageData';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  URL_AUTH,
  URL_AUTH_LOGIN,
  URL_AUTH_REGISTRATION,
  URL_HOME,
} from './routing/URLs';
import LoginPage from './routing/pages/auth/LoginPage';
import RegistrationPage from './routing/pages/auth/RegistrationPage';
import IncomesPage from './routing/pages/auth/IncomesPage';

const App = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const { listenToIncomesChanges } = useManageData();

  const isUserLoggedIn = !!user?.uid;

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [user.uid]);

  useEffect(() => {
    if (isUserLoggedIn && !user.loading) {
      navigate(URL_HOME, { replace: true });
    }

    if (!isUserLoggedIn && !user.loading) {
      navigate(URL_AUTH_LOGIN, { replace: true });
    }
  }, [isUserLoggedIn, user.loading]);

  const location = useLocation();

  console.log('---location:', location);
  console.log('isUserLoggedIn:', isUserLoggedIn);
  console.log('user.loading:', user.loading);

  return (
    <>
      <h1>The Budget project</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Link to={URL_AUTH_REGISTRATION}>GO TO REGISTRATION</Link>
        <Link to={URL_AUTH_LOGIN}>GO TO LOG IN</Link>
        <Link to={URL_HOME}>GO TO INCOMES</Link>
      </div>

      <Routes>
        <Route index element={<IncomesPage />} />
        <Route path={URL_HOME} element={<IncomesPage />} />

        <Route path={URL_AUTH}>
          <Route path={URL_AUTH_REGISTRATION} element={<RegistrationPage />} />
          <Route path={URL_AUTH_LOGIN} element={<LoginPage />} />
        </Route>

        <Route path="*" element={<div>PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
