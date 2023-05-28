import { ButtonProps } from '@mui/material';
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

export { createAddIncomeButtonStyles };
