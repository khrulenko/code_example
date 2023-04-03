import { PaperProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createPageCanvasStyles: StyleFunction<PaperProps> = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  width: '100%',
  padding: spacing(4),

  borderRadius: spacing(6),

  [down('sm')]: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
});

const createHeaderWrapperStyles: StyleFunction<PaperProps> = ({
  theme: { spacing },
}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing(1),

  height: spacing(7),
});

export { createPageCanvasStyles, createHeaderWrapperStyles };
