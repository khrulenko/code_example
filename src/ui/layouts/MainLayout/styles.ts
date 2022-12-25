import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContentWrapperStyles: StyleFunction<StackProps> = ({
  theme: { spacing },
}) => ({
  flexGrow: 1,
  paddingY: spacing(11),
  padding: `${spacing(11)} 5%`,
  alignItems: 'center',
});

export { createContentWrapperStyles };
