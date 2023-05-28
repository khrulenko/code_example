import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Stack,
  Typography,
  styled,
  StackProps,
  Tooltip,
} from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { getUser } from '../../../../redux/store';
import {
  createUserPanelWrapperStyles,
  createLogOutButtonStyles,
} from './styles';
import { AppDispatch } from '../../../../common/types';
import { logOut } from '../../../../firebase/thunkAuth';

export interface UserPanelProps {
  open?: boolean;
}

export type UserPanelWrapperProps = UserPanelProps & StackProps;

const UserPanelWrapper = styled(Stack)(createUserPanelWrapperStyles);
const LogOutButton = styled(Button)(createLogOutButtonStyles);

const UserPanel = ({ open = true }: UserPanelProps) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logOutButtonText = 'log out';
  const userName = open ? user.email : user.email?.slice(0, 1);

  return (
    <UserPanelWrapper spacing={2} open={open}>
      <Typography color="background.paper" align="center">
        {userName}
      </Typography>

      <LogOutButton
        variant="contained"
        disableElevation
        onClick={() => dispatch(logOut(navigate))}
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
