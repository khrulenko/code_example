import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../firebase/useAuth';
import { getUser } from '../redux/store';
import { URL_HOME } from '../routing/URLs';

const MainLayout = () => {
  const { logOut } = useAuth();
  const user = useSelector(getUser);

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          border: '1px solid black',
          margin: '20px',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <Link to={URL_HOME}>INCOMES</Link>
          <Link to={'not_existing_page'}>ANOTHER PAGE</Link>
        </div>

        <div>
          <div>
            <div>{user.uid}</div>
            <div>
              <b>{user.email}</b>
            </div>
            <div>user has been already signed in</div>
          </div>

          <button style={{ display: 'block' }} onClick={() => logOut()}>
            logOut
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
