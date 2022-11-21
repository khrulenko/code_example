import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type FBUser = User | null;

export interface FBUserData {
  uid: string | null;
  email: string | null;
}

export interface AppUserData {
  loading: boolean;
}

export type UserData = FBUserData & AppUserData;

const initialState: UserData = { uid: null, email: null, loading: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserData, action: PayloadAction<FBUserData | null>) {
      if (!action.payload) return (state = initialState);

      state = { ...state, ...action.payload };

      return state;
    },
    startLoadingUser(state: UserData) {
      state.loading = true;

      return state;
    },
    endLoadingUser(state: UserData) {
      state.loading = false;

      return state;
    },
  },
});

export const { setUser, startLoadingUser, endLoadingUser } = userSlice.actions;
export default userSlice.reducer;
