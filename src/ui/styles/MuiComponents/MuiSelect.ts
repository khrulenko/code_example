import { PropsWithTheme } from '../../../common/types';

const MuiSelect = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      borderRadius: spacing(3),
    }),
  },
};

export default MuiSelect;
