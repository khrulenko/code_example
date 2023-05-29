import { NavigateFunction } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Collections } from '../common/constants';
import { auth, db } from './firebaseInit';
import { URL_AUTH_LOGIN, URL_INCOMES } from '../routing/URLs';

interface Creds {
  email: string;
  password: string;
}

type CredsWithNav = Creds & {
  navigate: NavigateFunction;
};

const createProfile = (uid: string, email: string) => {
  const profileRef = doc(db, Collections.PROFILES, uid);

  setDoc(profileRef, {
    incomes: [],
    email,
  });
};

const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: Creds) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    user?.email && createProfile(user.uid, user.email);
  }
);

const logIn = createAsyncThunk(
  'user/logIn',
  async ({ email, password, navigate }: CredsWithNav) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate(URL_INCOMES, { replace: true });
  }
);

const logOut = createAsyncThunk(
  'user/logOut',
  async (navigate: NavigateFunction) => {
    await signOut(auth);
    navigate(URL_AUTH_LOGIN, { replace: true });
  }
);

export { createUser, logIn, logOut };
