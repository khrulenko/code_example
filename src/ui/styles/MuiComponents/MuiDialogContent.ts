import { PropsWithTheme } from '../../../common/types';

const MuiDialogContent = {
  styleOverrides: {
    root: ({}: PropsWithTheme) => ({
      display: 'flex',
      justifyContent: 'center',

      padding: '0',
    }),
  },
};

export default MuiDialogContent;
