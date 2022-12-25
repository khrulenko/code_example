import { PropsWithTheme } from '../../../common/types';

const MuiTextField = {
  styleOverrides: {
    root: ({ theme }: PropsWithTheme) => ({
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(3),
      },
      '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: 0,
        translate: '0 100%',
      },
      '& .MuiInputLabel-root.Mui-error': {
        color: 'inherit',
      },
      input: {
        '&::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '&[type=number]': {
          MozAppearance: 'textfield',
        },
      },
    }),
  },
};

export default MuiTextField;
