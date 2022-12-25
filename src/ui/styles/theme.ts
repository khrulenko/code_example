import { createTheme, ThemeOptions } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import MuiButton from './MuiComponents/MuiButton';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTextField from './MuiComponents/MuiTexfield';
import MuiTypography from './MuiComponents/MuiTypography';
import MuiDialog from './MuiComponents/MuiDialog';
import MuiDialogContent from './MuiComponents/MuiDialogContent';
import MuiSelect from './MuiComponents/MuiSelect';
import MuiTableCell from './MuiComponents/MuiTableCell';

// theme object structure:
// https://mui.com/material-ui/customization/default-theme/

type CustomThemeProps = {
  customShadows: string[];
  navBarSizes: {
    width: {
      opened: number;
      closed: number;
    };
  };
};

declare module '@mui/material/' {
  interface Theme extends CustomThemeProps {}
  interface ThemeOptions extends CustomThemeProps {}
}

const customShadows: string[] = ['none', 'rgba(0, 0, 0, 0.16) 0px 0px 3px'];
const palette = {
  primary: {
    light: grey[100],
    main: grey[900],
    dark: grey[700],
    contrastText: '#fff',
  },
  secondary: blueGrey,
};
const breakpoints = {
  values: {
    xs: 0,
    ms: 500,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const navBarSizes = {
  width: {
    opened: 240,
    closed: 56,
  },
};

const theme = createTheme({
  palette,
  breakpoints,
  components: {
    MuiCssBaseline,
    MuiTypography,
    MuiTextField,
    MuiButton,
    MuiDialog,
    MuiDialogContent,
    MuiSelect,
    MuiTableCell,
  },
  customShadows,
  navBarSizes,
} as ThemeOptions);

export default theme;
