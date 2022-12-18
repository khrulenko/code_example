import { PropsWithTheme } from '../../../common/types';

const MuiButton = {
  styleOverrides: {
    root: ({ theme }: PropsWithTheme) => ({
      borderRadius: theme.spacing(2),
    }),
  },
};

export default MuiButton;
