import { PropsWithTheme } from '../../../common/types';

const MuiTableCell = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      maxWidth: spacing(12),

      padding: spacing(1),
    }),
  },
};

export default MuiTableCell;
