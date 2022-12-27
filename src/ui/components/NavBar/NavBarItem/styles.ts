import { LinkProps, ListItemTextProps } from '@mui/material';
import { NavBarItemWrapperProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createNavBarItemWrapperStyles: StyleFunction<NavBarItemWrapperProps> = ({
  theme: { spacing, palette, customShadows },
  isChosen,
}) => ({
  padding: '0',

  height: spacing(6),

  backgroundColor: palette.background.paper,
  boxShadow: isChosen ? customShadows[1] : customShadows[0],
  borderRadius: spacing(3),
});

const createRouterLinkStyles: StyleFunction<LinkProps> = ({
  theme: { spacing, palette },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  width: '100%',
  height: '100%',

  padding: spacing(1),

  textDecoration: 'none',
  color: palette.primary.main,
});

const createNavBarItemTextStyles: StyleFunction<ListItemTextProps> = () => ({
  ':first-letter': { textTransform: 'capitalize' },
});

export {
  createNavBarItemWrapperStyles,
  createRouterLinkStyles,
  createNavBarItemTextStyles,
};
