import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { createUser, logIn, logOut } from '../../firebase/thunkAuth';

export type FBUser = User | null;

export interface FBUserData {
  uid: string | null;
  email: string | null;
}

export interface AppUserData {
  loading: boolean;
  error: boolean;
}

export type UserData = FBUserData & AppUserData;

const initialState: UserData = {
  uid: null,
  email: null,
  loading: true,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserData, action: PayloadAction<FBUserData | null>) {
      if (!action.payload) return (state = initialState);

      state = { ...state, ...action.payload };

      return state;
    },
    endLoadingUser(state: UserData) {
      state.loading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    const thunks = [createUser, logIn, logOut];

    thunks.forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state: UserData) => {
          state.loading = true;
          return state;
        })
        .addCase(thunk.fulfilled, (state: UserData) => {
          state.loading = false;
          return state;
        })
        .addCase(thunk.rejected, (state: UserData) => {
          state.loading = false;
          state.error = true;

          return state;
        });
    });
  },
});

export const { setUser, endLoadingUser } = userSlice.actions;
export default userSlice.reducer;
