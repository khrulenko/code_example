import { ButtonProps, TableProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createIncomesTableWrapperStyles: StyleFunction<TableProps> = ({
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

export { createIncomesTableWrapperStyles, createActionButtonStyles };
