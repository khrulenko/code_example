import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';
import {
  getErrorProps,
  handleChange,
  isObjEmpty,
  getDeleteCallback,
} from '../../../../common/utils';
import { URL_AUTH_REGISTRATION } from '../../../../routing/URLs';
import NoWrap from '../../../components/NoWrap';
import useValidation from '../../../../common/hooks/useValidation';
import { AppDispatch, StringObject } from '../../../../common/types';
import schema from './schema';
import { logIn } from '../../../../firebase/thunkAuth';

const LoginPage = () => {
  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');
  const [errors, errorsSet] = useState<StringObject>({});

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);

  const validationData = useMemo(
    () => ({ email, password }),
    [email, password]
  );

  const validation = useValidation(validationData, schema);

  useEffect(() => {
    errorsSet(getDeleteCallback('email'));
  }, [email]);

  useEffect(() => {
    errorsSet(getDeleteCallback('password'));
  }, [password]);

  const errorProps = (key: string) => getErrorProps(key, errors);
  const goToRegistrationPage = () => navigate(URL_AUTH_REGISTRATION);
  const onLogin = () => {
    if (!isObjEmpty(validation)) {
      errorsSet(validation);

      return;
    }

    dispatch(logIn({ email, password, navigate }));
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h2" align="center">
        Please, <NoWrap>sign in</NoWrap>
      </Typography>

      <TextField
        label="email"
        id="logEmail"
        type="email"
        onChange={handleEmailChange}
        {...errorProps('email')}
      />

      <TextField
        label="password"
        id="logPassword"
        type="password"
        onChange={handlePasswordChange}
        {...errorProps('password')}
      />

      <Button variant="contained" disableElevation onClick={onLogin}>
        Sign in
      </Button>

      <Typography align="center">
        If you don't have an account then
        <br />
        <Button onClick={goToRegistrationPage}>Go to registration</Button>
      </Typography>
    </Stack>
  );
};

export default LoginPage;
