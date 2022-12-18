import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/system';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { useTheme } from '@mui/material';
import { getUser } from '../redux/store';
import { URL_ANALYTICS, URL_INCOMES } from '../routing/URLs';
import Loader from './components/Loader';
import NavBar, { NavBarItems } from './components/NavBar';

const menuItems: NavBarItems = [
  {
    title: 'incomes',
    url: URL_INCOMES,
    icon: <WalletRoundedIcon />,
  },
  {
    title: 'analytics',
    url: URL_ANALYTICS,
    icon: <QueryStatsRoundedIcon />,
  },
];

const MainLayout = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(true);
  const user = useSelector(getUser);

  const toggleMenu = () => setIsMenuOpened((prevState) => !prevState);
  const { spacing } = useTheme();

  if (user?.loading) {
    return <Loader />;
  }

  return (
    <Stack direction="row">
      <NavBar open={isMenuOpened} toggler={toggleMenu} items={menuItems} />

      <Stack flexGrow={1} padding={spacing(13)} alignItems="center">
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default MainLayout;
