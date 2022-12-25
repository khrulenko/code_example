import {
  Stack,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { AnyFunction } from '../../../common/types';
import { Currencies, CurrenciesSigns } from '../../../common/constants';
import { EditableIncomeData } from '../../../firebase/useManageData';

type IncomeFieldsProps = {
  values: EditableIncomeData;
  onAmountChange: AnyFunction;
  onCommentChange: AnyFunction;
  onCurrencyChange: AnyFunction;
};

const IncomeFields = ({
  values,
  onAmountChange,
  onCommentChange,
  onCurrencyChange,
}: IncomeFieldsProps) => {
  const { amount, comment, currency } = values;
  const currencies = Object.keys(Currencies);

  const getStartAdornment = (title: string) => (
    <InputAdornment position="start">{title}</InputAdornment>
  );

  return (
    <Stack spacing={2} padding={1} maxWidth="240px">
      <TextField
        value={amount}
        label="amount"
        type="number"
        id="amount"
        size="small"
        onChange={onAmountChange}
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
        onChange={onCommentChange}
      />

      <Select
        value={currency}
        name="currency"
        size="small"
        onChange={onCurrencyChange}
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
