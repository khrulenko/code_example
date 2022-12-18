import { Link, LinkProps, useLocation } from 'react-router-dom';
import {
  ListItemIcon,
  ListItemText,
  ListItemTextProps,
  MenuItem,
  MenuItemProps,
  styled,
  Tooltip,
} from '@mui/material';
import {
  createNavBarItemWrapperStyles,
  createRouterLinkStyles,
  createNavBarItemTextStyles,
} from './styles';
import { NavBarItemData } from '..';

export type NavBarItemProps = {
  open?: boolean;
} & NavBarItemData;

export type NavBarItemWrapperProps = {
  isChosen?: boolean;
} & MenuItemProps;

const NavBarItemWrapper = styled(MenuItem)(createNavBarItemWrapperStyles);
const RouterLink = styled(Link)(createRouterLinkStyles);
const NavBarItemText = styled(ListItemText)(createNavBarItemTextStyles);

const NavBarItem = ({ url, title, icon, open }: NavBarItemProps) => {
  const location = useLocation();
  const isChosen = location.pathname === url;
  const tooltipTitle = open ? '' : title;

  return (
    <Tooltip title={tooltipTitle} placement="right">
      <NavBarItemWrapper isChosen={isChosen}>
        <RouterLink to={url}>
          <ListItemIcon>{icon}</ListItemIcon>
          {open && <NavBarItemText>{title}</NavBarItemText>}
        </RouterLink>
      </NavBarItemWrapper>
    </Tooltip>
  );
};

export default NavBarItem;
