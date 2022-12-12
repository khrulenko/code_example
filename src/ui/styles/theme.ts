import { createTheme, ThemeOptions } from '@mui/material';
import { teal } from '@mui/material/colors';
import MuiButton from './MuiComponents/MuiButton';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTextField from './MuiComponents/MuiTexfield';
import MuiTypography from './MuiComponents/MuiTypography';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: teal,
    background: {
      default: '#f3f3f3',
    },
  },
  components: {
    MuiCssBaseline,
    MuiTypography,
    MuiTextField,
    MuiButton,
  },
} as ThemeOptions);

export default theme;
