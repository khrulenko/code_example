import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { handleChange } from '../../../common/utils';
import useAuth from '../../../firebase/useAuth';
import { URL_AUTH_REGISTRATION } from '../../../routing/URLs';
import NoWrap from '../../components/NoWrap';

const LoginPage = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);

  const goToRegistrationPage = () => navigate(URL_AUTH_REGISTRATION);
  const onLogin = () => logIn(email, password);

  const isUnableToSignIn = !email?.length || !password?.length;

  return (
    <Stack spacing={3}>
      <Typography variant="h2" align="center">
        Please, <NoWrap>sign in</NoWrap>
      </Typography>

      <TextField
        label="email"
        id="logEmail"
        type="email"
        onChange={handleEmailChange}
      />

      <TextField
        label="password"
        id="logPassword"
        type="password"
        onChange={handlePasswordChange}
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={onLogin}
        disabled={isUnableToSignIn}
      >
        Sign in
      </Button>

      <Typography align="center">
        If you don't have an account then
        <br />
        <Button color="primary" onClick={goToRegistrationPage}>
          Go to registration
        </Button>
      </Typography>
    </Stack>
  );
};

export default LoginPage;
