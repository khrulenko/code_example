import { IncomesData } from '../redux/slices/incomesSlice';
import { UserData } from '../redux/slices/userSlice';
import { Currencies } from './constants';

const mockedUser: UserData = {
  uid: '123456789',
  email: 'user.test@gmail.com',
  loading: false,
  error: false,
};

const mockedEmptyIncomes: IncomesData = {
  items: [],
  loading: false,
};

const mockedIncomes: IncomesData = {
  items: [
    {
      amount: '1',
      comment: 'one income',
      currency: Currencies.UAH,
      date: '2011-11-11',
      id: '111',
    },
    {
      amount: '2',
      comment: 'two incomes',
      currency: Currencies.UAH,
      date: '2022-02-22',
      id: '222',
    },
    {
      amount: '3',
      comment: 'three incomes',
      currency: Currencies.UAH,
      date: '2033-03-30',
      id: '333',
    },
  ],
  loading: false,
};

export { mockedUser, mockedEmptyIncomes, mockedIncomes };
