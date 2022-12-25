import { PropsWithTheme } from '../../../common/types';

const MuiTableCell = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      maxWidth: spacing(12),
      whiteSpace: 'normal',
      wordWrap: 'break-word',

      padding: spacing(1),
    }),
  },
};

export default MuiTableCell;
