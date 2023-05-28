import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IncomesPage from '.';
import {
  mockedUser,
  mockedEmptyIncomes,
  mockedIncomes,
} from '../../../common/mocks';
import { renderWithProviders } from '../../../common/testUtils';
import { State } from '../../../redux/store';

const emptyIncomesState: State = {
  user: mockedUser,
  incomes: mockedEmptyIncomes,
};

const loadedIncomesState: State = {
  user: mockedUser,
  incomes: mockedIncomes,
};

describe('IncomesPage', () => {
  test('shows "create income" modal after click on "add income" button', () => {
    renderWithProviders(<IncomesPage />, { initialState: emptyIncomesState });

    const addIncomeButton = screen.getByTestId('addIncomeButton');

    userEvent.click(addIncomeButton);

    const createIncomeModal = screen.getByText(/create new income/i);
    expect(createIncomeModal).toBeInTheDocument();
  });

  describe('if there are no incomes', () => {
    test('shows "no incomes" allert ', () => {
      renderWithProviders(<IncomesPage />, { initialState: emptyIncomesState });
      const noIncomesAllert = screen.getByText(/there are no incomes/i);

      expect(noIncomesAllert).toBeInTheDocument();
    });
  });

  describe('if there are incomes', () => {
    beforeEach(() =>
      renderWithProviders(<IncomesPage />, {
        initialState: loadedIncomesState,
      })
    );

    test('shows "delete income" modal after click on "delete income" button', () => {
      const [firstDelIncButton] = screen.getAllByTestId('deleteIncomeButton');

      userEvent.click(firstDelIncButton);

      const deleteIncomeModal = screen.getByText(
        /are you sure you want to delete this income/i
      );

      expect(deleteIncomeModal).toBeInTheDocument();
    });

    test('shows "change income" modal after click on "edit income" button', () => {
      const [firstEditIncButton] = screen.getAllByTestId('editIncomeButton');

      userEvent.click(firstEditIncButton);

      const changeIncomeModal = screen.getByText(/change income/i);

      expect(changeIncomeModal).toBeInTheDocument();
    });
  });
});
