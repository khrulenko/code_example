import { Link, useLocation } from 'react-router-dom';
import {
  ListItemIcon,
  ListItemText,
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
import { getShouldNotForvardRule } from '../../../../common/utils';

export type NavBarItemProps = {
  isOpened?: boolean;
} & NavBarItemData;

export type NavBarItemWrapperProps = {
  isChosen?: boolean;
} & MenuItemProps;

const NavBarItemWrapper = styled(
  MenuItem,
  getShouldNotForvardRule('isChosen')
)(createNavBarItemWrapperStyles);

const RouterLink = styled(Link)(createRouterLinkStyles);
const NavBarItemText = styled(ListItemText)(createNavBarItemTextStyles);

const NavBarItem = ({ url, title, icon, isOpened }: NavBarItemProps) => {
  const location = useLocation();
  const isChosen = location.pathname === url;
  const tooltipTitle = isOpened ? '' : title;

  return (
    <Tooltip title={tooltipTitle} placement="right">
      <NavBarItemWrapper isChosen={isChosen}>
        <RouterLink to={url}>
          <ListItemIcon>{icon}</ListItemIcon>
          {isOpened && <NavBarItemText>{title}</NavBarItemText>}
        </RouterLink>
      </NavBarItemWrapper>
    </Tooltip>
  );
};

export default NavBarItem;
