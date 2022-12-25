import {
  ButtonProps,
  CSSObject,
  DrawerProps,
  ListProps,
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
    breakpoints: { down },
  },
  open,
}) => {
  const transition = transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.shortest,
  });

  const openedMixin = (): CSSObject => ({
    width: width.opened,
    transition,
  });

  const closedMixin = (): CSSObject => ({
    width: width.closed,
    transition,
  });

  const borderRadius = spacing(3);

  return {
    width: width.opened,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open ? openedMixin() : closedMixin()),

    '& .MuiDrawer-paper': {
      ...(open ? openedMixin() : closedMixin()),

      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      backgroundColor: palette.background.paper,
      overflowX: 'hidden',

      [down('md')]: {
        width: '100%',

        borderBottomRightRadius: spacing(0),
        borderTopLeftRadius: borderRadius,
      },
    },
  };
};

const createNavBarBodyStyles: StyleFunction<StackProps> = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: spacing(1),

  height: '100%',
  padding: spacing(1),

  [down('md')]: {
    flexDirection: 'row',
  },
});

const createNavBarButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { spacing },
}) => ({
  width: '100%',

  padding: spacing(1),

  borderRadius: '0',
});

const createNavBarHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: { spacing, palette },
}) => ({
  fontWeight: 'bold',
  textTransform: 'capitalize',
  textAlign: 'center',

  backgroundColor: palette.background.paper,
  borderRadius: spacing(1),
});

const createNavBarItemsListStyles: StyleFunction<ListProps> = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: spacing(1),

  padding: '0',

  [down('md')]: {
    flexDirection: 'row',
  },
});

export {
  createNavBarWrapperStyles,
  createNavBarBodyStyles,
  createNavBarButtonStyles,
  createNavBarHeaderStyles,
  createNavBarItemsListStyles,
};
