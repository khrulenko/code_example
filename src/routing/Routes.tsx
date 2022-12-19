import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../redux/store';
import AuthLayout from '../ui/AuthLayout';
import MainLayout from '../ui/MainLayout';
import LoginPage from '../ui/pages/auth/LoginPage';
import RegistrationPage from '../ui/pages/auth/RegistrationPage';
import IncomesPage from '../ui/pages/IncomesPage';
import ProfilePage from '../ui/pages/ProfilePage';
import ConditionalRoute from './ConditionalRoute';
import {
  URL_AUTH,
  URL_REGISTRATION,
  URL_INCOMES,
  URL_LOGIN,
  URL_ANALYTICS,
  URL_PROFILE,
} from './URLs';

const AppRoutes = () => {
  const { uid, loading } = useSelector(getUser);

  const isUserLoggedIn = Boolean(uid);
  const shouldNavigateToIncomes = isUserLoggedIn && !loading;
  const shouldNavigateToAuth = !isUserLoggedIn && !loading;

  return (
    <Routes>
      <Route
        element={
          <ConditionalRoute
            condition={shouldNavigateToIncomes}
            path={URL_INCOMES}
          />
        }
      >
        <Route path={URL_AUTH} element={<AuthLayout />}>
          <Route index element={<Navigate to={URL_LOGIN} />} />
          <Route path={URL_LOGIN} element={<LoginPage />} />
          <Route path={URL_REGISTRATION} element={<RegistrationPage />} />
        </Route>
      </Route>

      <Route
        element={
          <ConditionalRoute condition={shouldNavigateToAuth} path={URL_AUTH} />
        }
      >
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Navigate to={URL_INCOMES} />} />
          <Route path={URL_INCOMES} element={<IncomesPage />} />
          <Route path={URL_PROFILE} element={<ProfilePage />} />
          <Route
            path={URL_ANALYTICS}
            element={
              <div>
                There is no analytics yet, please, visit this page later
              </div>
            }
          />

          <Route
            path="*"
            element={<div>Page not found, try something else</div>}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
