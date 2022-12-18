import {
  ButtonProps,
  CSSObject,
  DrawerProps,
  StackProps,
  TypographyProps,
} from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createNavBarWrapperStyles: StyleFunction<DrawerProps> = ({
  theme: {
    spacing,
    transitions,
    palette,
    navBarSizes: { width },
  },
  open,
}) => {
  const transition = transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.shortest,
  });

  const openedMixin = (): CSSObject => ({
    width: width.open,
    transition,
  });

  const closedMixin = (): CSSObject => ({
    width: width.closed,
    transition,
  });

  return {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open ? openedMixin() : closedMixin()),

    '& .MuiDrawer-paper': {
      ...(open ? openedMixin() : closedMixin()),

      borderTopRightRadius: spacing(2),
      borderBottomRightRadius: spacing(2),
      backgroundColor: palette.background.paper,
      overflowX: 'hidden',
    },
  };
};

const createNavBarBodyStyles: StyleFunction<StackProps> = ({
  theme: { spacing },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
  padding: spacing(1),
});

const createNavBarButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { spacing },
}) => ({
  width: '100%',
  minWidth: spacing(4),

  borderRadius: '0',
});

const createNavBarHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: { spacing, palette },
}) => ({
  padding: spacing(1),

  fontWeight: 'bold',
  textTransform: 'capitalize',
  textAlign: 'center',
  backgroundColor: palette.background.paper,
  borderRadius: spacing(1),
});

export {
  createNavBarWrapperStyles,
  createNavBarBodyStyles,
  createNavBarButtonStyles,
  createNavBarHeaderStyles,
};
