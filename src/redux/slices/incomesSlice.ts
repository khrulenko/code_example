import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Income {
  id: string;
  amount: number;
  date: string;
  name: string;
  currensy: string;
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
