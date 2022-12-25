import { useEffect, useState } from 'react';
import { Currencies } from '../constants';
import { handleChange } from '../utils';
import { EditableIncomeData } from '../../firebase/useManageData';

const empty: EditableIncomeData = {
  amount: '',
  comment: '',
  currency: Currencies.USD,
};

type UseIncomeFieldsArgs = EditableIncomeData | undefined;

const useIncomeFields = (defaultValues: UseIncomeFieldsArgs = empty) => {
  const [amount, amountSet] = useState<string>(defaultValues.amount);
  const [comment, commentSet] = useState<string>(defaultValues.comment);
  const [currency, currencySet] = useState<Currencies>(defaultValues.currency);

  const values = {
    amount,
    comment,
    currency,
  };

  const handlers = {
    handleAmountChange: handleChange(amountSet),
    handleCommentChange: handleChange(commentSet),
    handleCurrencyChange: handleChange(currencySet),
  };

  const onResetValues = () => {
    amountSet(defaultValues.amount);
    commentSet(defaultValues.comment);
    currencySet(defaultValues.currency);
  };

  useEffect(() => {
    onResetValues();
  }, [defaultValues.amount, defaultValues.comment, defaultValues.currency]);

  return {
    values,
    handlers,
    onResetValues,
  };
};

export default useIncomeFields;
