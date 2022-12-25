import { StyleFunction } from '../../../common/types';

const createAddIncomeButtonStyles: StyleFunction = ({
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

const createIncomesTableStyles: StyleFunction = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  tableLayout: 'auto',
  display: 'table',
  overflowX: 'auto',

  [down('xs')]: {
    display: 'block',
  },
});

const createActionButtonStyles: StyleFunction = ({ theme: { spacing } }) => ({
  width: spacing(5),
});

export {
  createAddIncomeButtonStyles,
  createIncomesTableStyles,
  createActionButtonStyles,
};
