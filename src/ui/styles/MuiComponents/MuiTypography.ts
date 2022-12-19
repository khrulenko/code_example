import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const { down } = createBreakpoints({});

const MuiTypography = {
  variants: [
    {
      props: { variant: 'h1' },
      style: {
        fontWeight: 'bold',
        [down('sm')]: {
          fontSize: '72px',
        },
      },
    },
    {
      props: { variant: 'h2' },
      style: {
        [down('sm')]: {
          fontSize: '48px',
        },
      },
    },
  ],
};

export default MuiTypography;
