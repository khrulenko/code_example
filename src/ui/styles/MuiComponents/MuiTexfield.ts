import { PropsWithTheme } from '../../../common/types';

const MuiTextField = {
  styleOverrides: {
    root: ({ theme }: PropsWithTheme) => ({
      '& fieldset': {
        borderRadius: theme.spacing(3),
      },
    }),
  },
};

export default MuiTextField;