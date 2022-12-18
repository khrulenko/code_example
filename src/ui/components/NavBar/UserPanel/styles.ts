import { ButtonProps } from '@mui/material';
import { UserPanelWrapperProps } from '.';
import { StyleFunction } from '../../../../common/types';

const createUserPanelWrapperStyles: StyleFunction<UserPanelWrapperProps> = ({
  theme: { spacing },
}) => ({
  padding: spacing(1),

  backgroundColor: 'black',
  borderRadius: '16px',
});

const createLogOutButtonStyles: StyleFunction<ButtonProps> = () => ({
  minWidth: '16px',
  height: '24px',
});

export { createUserPanelWrapperStyles, createLogOutButtonStyles };
