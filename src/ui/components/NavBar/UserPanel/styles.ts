import { ButtonProps } from '@mui/material';
import { UserPanelWrapperProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createUserPanelWrapperStyles: StyleFunction<UserPanelWrapperProps> = ({
  theme: { spacing, palette },
}) => ({
  padding: spacing(2),

  backgroundColor: palette.primary.main,
  borderRadius: spacing(3),
});

const createLogOutButtonStyles: StyleFunction<ButtonProps> = ({
  theme: { spacing },
}) => ({
  height: spacing(3),

  padding: spacing(3),
});

export { createUserPanelWrapperStyles, createLogOutButtonStyles };
