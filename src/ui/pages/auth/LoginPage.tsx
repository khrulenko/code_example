import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleChange } from '../../../common/utils';
import useAuth from '../../../firebase/useAuth';
import { getUser } from '../../../redux/store';
import { URL_AUTH_REGISTRATION } from '../../../routing/URLs';

const LoginPage = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const user = useSelector(getUser);
  const isUserLoggedIn = !!user?.uid;
  const style = { border: '1px solid black', margin: '20px', padding: '10px' };

  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);

  return (
    <div style={style}>
      <h2>Sign IN existing user</h2>

      {user.loading ? (
        <div>LOADING...</div>
      ) : isUserLoggedIn ? (
        <>
          <div>
            <div>{user.uid}</div>
            <div>
              <b>{user.email}</b>
            </div>
            <div>user has been already signed in</div>
          </div>
        </>
      ) : (
        <>
          <input
            style={{ display: 'block' }}
            type="text"
            id="logEmail"
            onChange={handleEmailChange}
          />
          <input
            style={{ display: 'block' }}
            type="password"
            id="logPassword"
            onChange={handlePasswordChange}
          />
          <button
            style={{ display: 'block' }}
            onClick={() => logIn(email, password)}
          >
            Sign in
          </button>
          <div>Don't have an account? Then go to registration page</div>
          <button
            style={{ display: 'block' }}
            onClick={() => navigate(URL_AUTH_REGISTRATION)}
          >
            Go to registration
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
