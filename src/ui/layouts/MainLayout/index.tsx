import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { styled, Stack } from '@mui/material';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { getUser } from '../../../redux/store';
import { URL_ANALYTICS, URL_INCOMES } from '../../../routing/URLs';
import Loader from '../../components/Loader';
import NavBar, { NavBarItems } from '../../components/NavBar';
import useWindowWidth from '../../../common/hooks/useWindowWidth';
import { createContentWrapperStyles } from './styles';

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

const ContentWrapper = styled(Stack)(createContentWrapperStyles);

const MainLayout = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(true);
  const { isMobile } = useWindowWidth();
  const user = useSelector(getUser);

  const toggleMenu = () => setIsMenuOpened((prevState) => !prevState);

  const direction = isMobile ? 'column' : 'row';

  if (user?.loading) {
    return <Loader />;
  }

  return (
    <Stack direction={direction}>
      <NavBar open={isMenuOpened} toggler={toggleMenu} items={menuItems} />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Stack>
  );
};

export default MainLayout;
