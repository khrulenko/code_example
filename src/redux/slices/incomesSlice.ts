import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currencies } from '../../common/constants';

export interface Income {
  id: string;
  amount: string;
  date: string;
  comment: string;
  currency: Currencies;
}

export type Incomes = Income[];

export interface IncomesData {
  items: Incomes;
  loading: boolean;
}

const incomesSlice = createSlice({
  name: 'incomes',
  initialState: { items: [], loading: false } as IncomesData,
  reducers: {
    setIncomes(state: IncomesData, action: PayloadAction<any>) {
      state.items = action.payload;

      return state;
    },
    startLoadingIncomes(state: IncomesData) {
      state.loading = true;

      return state;
    },
    endLoadingIncomes(state: IncomesData) {
      state.loading = false;

      return state;
    },
  },
});

export const { setIncomes, startLoadingIncomes, endLoadingIncomes } =
  incomesSlice.actions;
export default incomesSlice.reducer;
