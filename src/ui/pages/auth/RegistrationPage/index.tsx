import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, TextField, Button } from '@mui/material';
import {
  getErrorProps,
  handleChange,
  isObjEmpty,
  getDeleteCallback,
} from '../../../../common/utils';
import { URL_AUTH_LOGIN } from '../../../../routing/URLs';
import NoWrap from '../../../components/NoWrap';
import useValidation from '../../../../common/hooks/useValidation';
import schema from './schema';
import { AppDispatch, StringObject } from '../../../../common/types';
import { createUser } from '../../../../firebase/thunkAuth';

const RegistrationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');
  const [confirmation, confirmationSet] = useState<string>('');
  const [errors, errorsSet] = useState<StringObject>({});

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);
  const handleConfirmationChange = handleChange(confirmationSet);

  const passwordFieldParams = { autoComplete: 'new-password' };

  const validationData = useMemo(
    () => ({ email, password, confirmation }),
    [email, password, confirmation]
  );

  const validation = useValidation(validationData, schema);

  useEffect(() => {
    errorsSet(getDeleteCallback('email'));
  }, [email]);

  useEffect(() => {
    errorsSet(getDeleteCallback('password'));
  }, [password]);

  useEffect(() => {
    errorsSet(getDeleteCallback('confirmation'));
  }, [confirmation]);

  const errorProps = (key: string) => getErrorProps(key, errors);
  const goToLogInPage = () => navigate(URL_AUTH_LOGIN);
  const onSignUp = () => {
    if (!isObjEmpty(validation)) {
      errorsSet(validation);

      return;
    }

    dispatch(createUser({ email, password }));
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h2" align="center">
        Please, <NoWrap>sign up</NoWrap>
      </Typography>

      <TextField
        label="email"
        id="signUpEmail"
        type="email"
        onChange={handleEmailChange}
        {...errorProps('email')}
      />

      <TextField
        label="create password"
        id="signUpPassword"
        type="password"
        onChange={handlePasswordChange}
        inputProps={passwordFieldParams}
        {...errorProps('password')}
      />

      <TextField
        label="confirm password"
        id="confirmation"
        type="password"
        onChange={handleConfirmationChange}
        inputProps={passwordFieldParams}
        {...errorProps('confirmation')}
      />

      <Button variant="contained" disableElevation onClick={onSignUp}>
        Sign up
      </Button>

      <Typography align="center">
        <Button onClick={goToLogInPage}>I have already had an account</Button>
      </Typography>
    </Stack>
  );
};

export default RegistrationPage;
