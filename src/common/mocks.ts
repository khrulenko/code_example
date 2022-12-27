const mockedUser = {
  uid: '123456789',
  email: 'user.test@gmail.com',
  loading: false,
};

const mockedEmptyIncomes = {
  items: [],
  loading: false,
};

const mockedIncomes = {
  items: [
    {
      amount: '1',
      comment: 'one income',
      currency: 'UAH',
      date: '2011-11-11',
      id: '111',
    },
    {
      amount: '2',
      comment: 'two incomes',
      currency: 'UAH',
      date: '2022-02-22',
      id: '222',
    },
    {
      amount: '3',
      comment: 'three incomes',
      currency: 'UAH',
      date: '2033-03-30',
      id: '333',
    },
  ],
  loading: false,
};

export { mockedUser, mockedEmptyIncomes, mockedIncomes };
