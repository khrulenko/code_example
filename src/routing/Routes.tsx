import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/MainLayout';
import LoginPage from '../ui/pages/auth/LoginPage';
import RegistrationPage from '../ui/pages/auth/RegistrationPage';
import IncomesPage from '../ui/pages/IncomesPage';
import {
  URL_AUTH,
  URL_AUTH_LOGIN,
  URL_AUTH_REGISTRATION,
  URL_HOME,
} from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URL_HOME} element={<MainLayout />}>
        <Route index element={<IncomesPage />} />
        <Route path={URL_HOME} element={<IncomesPage />} />
        <Route path="*" element={<div>PAGE NOT FOUND</div>} />
      </Route>

      <Route path={URL_AUTH}>
        <Route index element={<LoginPage />} />
        <Route path={URL_AUTH_REGISTRATION} element={<RegistrationPage />} />
        <Route path={URL_AUTH_LOGIN} element={<LoginPage />} />
      </Route>

      <Route path="*" element={<Navigate to={URL_HOME} />} />
    </Routes>
  );
};

export default AppRoutes;
