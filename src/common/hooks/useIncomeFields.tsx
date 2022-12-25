import { useEffect, useMemo, useState } from 'react';
import { Currencies } from '../constants';
import { handleChange } from '../utils';
import { EditableIncomeData } from '../../firebase/useManageData';
import validRules, { schemaWrapper } from '../validation';
import Joi from 'joi';
import useValidation from './useValidation';

const schema = schemaWrapper({
  amount: validRules.NUMERIC_STRING.required(),
  comment: Joi.string().max(100).empty(['']),
  currency: Joi.valid(...Object.values(Currencies)),
});

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

  const validationData = useMemo(
    () => ({ amount, comment, currency }),
    [amount, comment, currency]
  );

  const validation = useValidation(validationData, schema);

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
    validation,
    onResetValues,
  };
};

export default useIncomeFields;
