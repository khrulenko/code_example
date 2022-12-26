import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import IncomesPage from '.';
import { mockedUser, mockedEmptyIncomes } from '../../../common/mocks';
import { renderWithRedux } from '../../../common/testUtils';

const emptyState = {
  user: mockedUser,
  incomes: mockedEmptyIncomes,
};

describe('IncomesPage', () => {
  test('should show "no incomes" allert if there are no incomes', () => {
    renderWithRedux(<IncomesPage />, { initialState: emptyState });
    const noIncomesAllert = screen.getByText(/there are no incomes/i);

    expect(noIncomesAllert).toBeInTheDocument();
  });
});
