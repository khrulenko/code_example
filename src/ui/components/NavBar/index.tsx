import { ReactNode } from 'react';
import {
  Button,
  Divider,
  Drawer,
  DrawerProps,
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
} from './styles';
import NavBarItem from './NavBarItem';
import { URL_PROFILE } from '../../../routing/URLs';

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

const NavBar = ({ toggler, open, items }: NavBarProps) => {
  return (
    <NavBarWrapper variant="permanent" open={open}>
      <NavBarButton onClick={toggler}>
        {open ? (
          <KeyboardDoubleArrowLeftRoundedIcon />
        ) : (
          <KeyboardDoubleArrowRightRoundedIcon />
        )}
      </NavBarButton>

      <NavBarBody spacing={1}>
        <NavBarHeader variant="h5">
          {open ? APP_NAME : <MonetizationOnRoundedIcon fontSize="small" />}
        </NavBarHeader>

        <Divider />

        <Stack spacing={1} flexGrow={1}>
          {items.map(({ title, url, icon }) => (
            <NavBarItem
              key={url}
              url={url}
              icon={icon}
              open={open}
              title={title}
            />
          ))}
        </Stack>

        <Divider />

        <NavBarItem
          url={URL_PROFILE}
          icon={<ManageAccountsRoundedIcon />}
          open={open}
          title={'Profile'}
        />
      </NavBarBody>
    </NavBarWrapper>
  );
};

export default NavBar;
