import { PropsWithTheme } from '../../../common/types';

const MuiTextField = {
  styleOverrides: {
    root: ({ theme }: PropsWithTheme) => ({
      '& fieldset': {
        borderRadius: theme.spacing(2),
      },
    }),
  },
};

export default MuiTextField;
