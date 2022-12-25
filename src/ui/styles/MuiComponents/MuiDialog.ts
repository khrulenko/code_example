import { PropsWithTheme } from '../../../common/types';

const MuiDialog = {
  defaultProps: {
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      '& .MuiDialog-paper': {
        padding: spacing(2),

        borderRadius: spacing(3),
      },
    }),
  },
};

export default MuiDialog;
