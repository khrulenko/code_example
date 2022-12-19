import { ReactNode } from 'react';
import {
  Button,
  Divider,
  Drawer,
  DrawerProps,
  List,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import { APP_NAME } from '../../../common/constants';
import { AnyFunction } from '../../../common/types';
import {
  createNavBarWrapperStyles,
  createNavBarBodyStyles,
  createNavBarButtonStyles,
  createNavBarHeaderStyles,
  createNavBarItemsListStyles,
} from './styles';
import NavBarItem from './NavBarItem';
import { URL_PROFILE } from '../../../routing/URLs';
import useWindowWidth from '../../../common/hooks/useWindowWidth';

export interface NavBarItemData {
  title: string;
  url: string;
  icon: ReactNode;
}

export type NavBarItems = NavBarItemData[];

export type NavBarProps = {
  toggler: AnyFunction;
  items: NavBarItems;
} & DrawerProps;

const NavBarWrapper = styled(Drawer)(createNavBarWrapperStyles);
const NavBarBody = styled(Stack)(createNavBarBodyStyles);
const NavBarButton = styled(Button)(createNavBarButtonStyles);
const NavBarHeader = styled(Typography)(createNavBarHeaderStyles);
const NavBarItemsList = styled(List)(createNavBarItemsListStyles);

const NavBar = ({ toggler, open, items }: NavBarProps) => {
  const { isMobile } = useWindowWidth();

  const navBarPosition = isMobile ? 'bottom' : 'left';
  const dividerOrientation = isMobile ? 'vertical' : 'horizontal';
  const isItemOpened = isMobile || open;
  const NavBarButtonIcon = open ? (
    <KeyboardDoubleArrowLeftRoundedIcon />
  ) : (
    <KeyboardDoubleArrowRightRoundedIcon />
  );
  const NavBarHeaderContent = open ? (
    APP_NAME
  ) : (
    <MonetizationOnRoundedIcon fontSize="small" />
  );

  return (
    <NavBarWrapper anchor={navBarPosition} variant="permanent" open={open}>
      {!isMobile && (
        <NavBarButton onClick={toggler}>{NavBarButtonIcon}</NavBarButton>
      )}

      <NavBarBody>
        {!isMobile && (
          <>
            <NavBarHeader variant="h5">{NavBarHeaderContent}</NavBarHeader>

            <Divider />
          </>
        )}

        <NavBarItemsList>
          {items.map(({ title, url, icon }) => (
            <NavBarItem
              key={url}
              url={url}
              icon={icon}
              isOpened={isItemOpened}
              title={title}
            />
          ))}
        </NavBarItemsList>

        <Divider orientation={dividerOrientation} flexItem={isMobile} />

        <NavBarItem
          url={URL_PROFILE}
          icon={<ManageAccountsRoundedIcon />}
          isOpened={isItemOpened}
          title={'Profile'}
        />
      </NavBarBody>
    </NavBarWrapper>
  );
};

export default NavBar;
