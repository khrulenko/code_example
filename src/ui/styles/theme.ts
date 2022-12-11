import { createTheme, ThemeOptions } from '@mui/material';
import { teal } from '@mui/material/colors';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTypography from './MuiComponents/MuiTypography';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: teal,
    background: {
      default: '#F5F7F9',
    },
  },
  components: {
    MuiCssBaseline,
    MuiTypography,
  },
} as ThemeOptions);

export default theme;
