import {
  Button,
  Stack,
  Typography,
  styled,
  StackProps,
  Tooltip,
} from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import useAuth from '../../../../firebase/useAuth';
import { useSelector } from 'react-redux';
import { getUser } from '../../../../redux/store';
import {
  createUserPanelWrapperStyles,
  createLogOutButtonStyles,
} from './styles';

export interface UserPanelProps {
  open?: boolean;
}

export type UserPanelWrapperProps = StackProps & UserPanelProps;

const UserPanelWrapper = styled(Stack)(createUserPanelWrapperStyles);
const LogOutButton = styled(Button)(createLogOutButtonStyles);

const UserPanel = ({ open }: UserPanelProps) => {
  const user = useSelector(getUser);
  const { logOut } = useAuth();

  const logOutButtonText = 'log out';
  const userName = open ? user.email : user.email?.slice(0, 1);

  return (
    <UserPanelWrapper spacing={2} open={open}>
      <Typography color="background.paper" align="center">
        {userName}
      </Typography>

      <LogOutButton
        variant="contained"
        size="small"
        disableElevation
        onClick={() => logOut()}
      >
        {open ? (
          <>
            <LogoutRoundedIcon fontSize="small" />
            <span>{logOutButtonText}</span>
          </>
        ) : (
          <Tooltip title={logOutButtonText} placement="right">
            <LogoutRoundedIcon fontSize="small" />
          </Tooltip>
        )}
      </LogOutButton>
    </UserPanelWrapper>
  );
};

export default UserPanel;
