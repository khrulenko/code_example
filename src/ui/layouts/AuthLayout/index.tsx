import { Outlet } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { APP_NAME } from '../../../common/constants';

const AuthLayout = () => {
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
