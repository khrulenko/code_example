import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, TextField, Button } from '@mui/material';
import { handleChange } from '../../../common/utils';
import useAuth from '../../../firebase/useAuth';
import { URL_AUTH_LOGIN } from '../../../routing/URLs';
import NoWrap from '../../components/NoWrap';

const RegistrationPage = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');
  const [confirmation, confirmationSet] = useState<string>('');

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);
  const handleConfirmationChange = handleChange(confirmationSet);

  const onSignUp = () => createUser(email, password);
  const goToLogInPage = () => navigate(URL_AUTH_LOGIN);

  const confirmationError = !!confirmation?.length && password !== confirmation;
  const isUnableToSignUp =
    !email?.length ||
    !password?.length ||
    !!confirmationError ||
    !confirmation?.length;

  return (
    <Stack spacing={3}>
      <Typography variant="h2" align="center">
        Please, <NoWrap>sign up</NoWrap>
      </Typography>

      <TextField
        label="email"
        id="signUpEmail"
        type="email"
        onChange={handleEmailChange}
      />

      <TextField
        label="create password"
        id="signUpPassword"
        type="password"
        onChange={handlePasswordChange}
      />

      <TextField
        label="confirm password"
        id="signUpPassword"
        type="password"
        onChange={handleConfirmationChange}
        error={confirmationError}
        helperText={
          confirmationError ? 'you shoud repeat created password' : ''
        }
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={onSignUp}
        disabled={isUnableToSignUp}
      >
        Sign up
      </Button>

      <Typography align="center">
        <Button color="primary" onClick={goToLogInPage}>
          I have already had an account
        </Button>
      </Typography>
    </Stack>
  );
};

export default RegistrationPage;
