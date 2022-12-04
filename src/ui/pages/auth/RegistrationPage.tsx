import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleChange } from '../../../common/utils';
import useAuth from '../../../firebase/useAuth';
import { getUser } from '../../../redux/store';
import { URL_AUTH_LOGIN } from '../../../routing/URLs';

const RegistrationPage = () => {
  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');

  const { createUser } = useAuth();
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const style = { border: '1px solid black', margin: '20px', padding: '10px' };
  const isUserLoggedIn = !!user?.uid;

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);

  return (
    <div style={style}>
      <h2>Sign UP</h2>

      {isUserLoggedIn ? (
        'user has been already signed in'
      ) : (
        <>
          <input
            style={{ display: 'block' }}
            type="text"
            id="email"
            onChange={handleEmailChange}
          />
          <input
            style={{ display: 'block' }}
            type="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <button
            style={{ display: 'block' }}
            onClick={() => createUser(email, password)}
          >
            Sign up
          </button>
          <button
            style={{ display: 'block' }}
            onClick={() => navigate(URL_AUTH_LOGIN)}
          >
            I have already had an account
          </button>
        </>
      )}
    </div>
  );
};

export default RegistrationPage;
