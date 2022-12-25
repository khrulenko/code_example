import {
  Stack,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { AnyFunction, StringObject } from '../../../common/types';
import { Currencies, CurrenciesSigns } from '../../../common/constants';
import { EditableIncomeData } from '../../../firebase/useManageData';
import { getErrorProps } from '../../../common/utils';

type IncomeFieldsProps = {
  values: EditableIncomeData;
  handlers: { [key: string]: AnyFunction };
  validation: StringObject;
};

const IncomeFields = ({ values, handlers, validation }: IncomeFieldsProps) => {
  const { amount, comment, currency } = values;
  const { handleAmountChange, handleCommentChange, handleCurrencyChange } =
    handlers;
  const currencies = Object.keys(Currencies);

  const errorProps = (key: string) => getErrorProps(key, validation);

  const getStartAdornment = (title: string) => (
    <InputAdornment position="start">{title}</InputAdornment>
  );

  return (
    <Stack spacing={3} padding={1} maxWidth="240px">
      <TextField
        value={amount}
        label="amount"
        type="number"
        id="amount"
        size="small"
        onChange={handleAmountChange}
        {...errorProps('amount')}
        InputProps={{
          startAdornment: getStartAdornment(CurrenciesSigns[currency]),
        }}
      />

      <TextField
        value={comment}
        label="comment"
        type="text"
        id="comment"
        size="small"
        onChange={handleCommentChange}
        {...errorProps('comment')}
      />

      <Select
        value={currency}
        name="currency"
        size="small"
        onChange={handleCurrencyChange}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default IncomeFields;
