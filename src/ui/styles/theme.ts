import { createTheme, ThemeOptions } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import MuiButton from './MuiComponents/MuiButton';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTextField from './MuiComponents/MuiTexfield';
import MuiTypography from './MuiComponents/MuiTypography';

// theme object structure:
// https://mui.com/material-ui/customization/default-theme/

type CustomThemeProps = {
  customShadows: string[];
  navBarSizes: {
    width: {
      open: number;
      closed: number;
    };
  };
};

declare module '@mui/material/' {
  interface Theme extends CustomThemeProps {}
  interface ThemeOptions extends CustomThemeProps {}
}

const customShadows: string[] = ['none', 'rgba(0, 0, 0, 0.16) 0px 0px 3px'];

const theme = createTheme({
  palette: {
    primary: {
      light: grey[100],
      main: grey[900],
      dark: grey[700],
      contrastText: '#fff',
    },
    secondary: blueGrey,
  },
  components: {
    MuiCssBaseline,
    MuiTypography,
    MuiTextField,
    MuiButton,
  },
  customShadows,
  navBarSizes: {
    width: {
      open: 240,
      closed: 56,
    },
  },
} as ThemeOptions);

export default theme;
