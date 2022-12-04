import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Collections } from '../common/constants';
import { getUserData } from '../common/utils';
import {
  setUser,
  startLoadingUser,
  endLoadingUser,
} from '../redux/slices/userSlice';
import { auth, db } from './firebaseInit';
import { useNavigate } from 'react-router-dom';
import { URL_AUTH_LOGIN, URL_INCOMES } from '../routing/URLs';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(getUserData(user)));
      dispatch(endLoadingUser());
    });
  }, []);

  const createUser = async (newEmail: string, newPassword: string) => {
    dispatch(startLoadingUser());

    const createProfile = (uid: string, email: string) => {
      const profileRef = doc(db, Collections.PROFILES, uid);

      setDoc(profileRef, {
        incomes: [],
        email,
      });
    };

    try {
      const {
        user: { uid, email },
      } = await createUserWithEmailAndPassword(auth, newEmail, newPassword);

      email && createProfile(uid, email);
    } catch ({ code, message }) {
      console.log('-!error in createUser', code, message);
    } finally {
      dispatch(endLoadingUser());
    }
  };

  const logIn = async (email: string, password: string) => {
    dispatch(startLoadingUser());

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(URL_INCOMES, { replace: true });
    } catch ({ code, message }) {
      console.log('-!error in logIn', code, message);
    } finally {
      dispatch(endLoadingUser());
    }
  };

  const logOut = () => {
    dispatch(startLoadingUser());

    try {
      signOut(auth);
      navigate(URL_AUTH_LOGIN);
      console.log('Logged-out successfully');
    } catch ({ code, message }) {
      console.log('-!error in logOut', code, message);
    } finally {
      dispatch(endLoadingUser());
    }
  };

  return { createUser, logIn, logOut };
};

export default useAuth;
