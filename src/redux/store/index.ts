import { configureStore } from '@reduxjs/toolkit';
import incomesReducer, { IncomesData } from '../slices/incomesSlice';
import userReducer, { UserData } from '../slices/userSlice';

interface State {
  user: UserData;
  incomes: IncomesData;
}

// selectors
const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export const getIncomes = createSelector('incomes');
export const getUser = createSelector('user');

// store
export const store = configureStore({
  reducer: {
    user: userReducer,
    incomes: incomesReducer,
  },
});

export default store;
