import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { getUser } from '../../../redux/store';
import Loader from '../../components/Loader';
import { APP_NAME } from '../../../common/constants';

const AuthLayout = () => {
  const user = useSelector(getUser);

  if (user?.loading) {
    return <Loader />;
  }

  return (
    <Stack spacing={6} p={3} alignItems="center">
      <Typography variant="h1" sx={{ textTransform: 'capitalize' }}>
        {APP_NAME}
      </Typography>

      <Stack width="100%" maxWidth="420px">
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
