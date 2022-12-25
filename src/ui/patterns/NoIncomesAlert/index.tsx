import { Typography } from '@mui/material';
import SwitchAccessShortcutAddRoundedIcon from '@mui/icons-material/SwitchAccessShortcutAddRounded';

const NoIncomesAlert = (): JSX.Element => (
  <Typography align="center" fontWeight="bold" fontSize="18px">
    There are no incomes,
    <br />
    try to add some, using button above{' '}
    <SwitchAccessShortcutAddRoundedIcon
      fontSize="large"
      sx={{ transform: 'scaleX(-1)' }}
    />
  </Typography>
);

export default NoIncomesAlert;
