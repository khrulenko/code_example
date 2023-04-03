import { ButtonProps, TableProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createAddIncomeButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { palette, spacing },
}) => ({
  alignItems: 'center',

  width: spacing(6),
  height: spacing(6),

  borderRadius: '50%',
  '&:hover': {
    svg: {
      fill: palette.primary.dark,
    },
  },
});

const createIncomesTableStyles: StyleFunction<TableProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  tableLayout: 'auto',
  display: 'table',
  overflowX: 'auto',

  [down('ms')]: {
    display: 'block',
  },
});

const createActionButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { spacing },
}) => ({
  width: spacing(5),
});

export {
  createAddIncomeButtonStyles,
  createIncomesTableStyles,
  createActionButtonStyles,
};
