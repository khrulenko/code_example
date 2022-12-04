import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  condition: boolean;
  path: string;
};

const ConditionalRoute = ({ condition, path }: Props) =>
  condition ? <Navigate to={path} /> : <Outlet />;

export default ConditionalRoute;
