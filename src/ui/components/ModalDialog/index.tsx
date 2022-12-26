import { MouseEventHandler, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogProps,
  Typography,
  Button,
  CircularProgress,
  useTheme,
} from '@mui/material';

type ModalDialogProps = {
  open: boolean;
  children?: any;
  actions?: any;
  header: string;
} & DialogProps;

const ModalDialog = ({
  children,
  onClose,
  actions,
  open,
  header,
  ...props
}: ModalDialogProps) => {
  const { minModalContentHeight } = useTheme();
  const [contentHeight, contentHeightSet] = useState<number>(
    minModalContentHeight
  );

  const DialogContentStyles = { minHeight: `${contentHeight}px` };
  const CircularProgressStyles = {
    minHeight: `${contentHeight}px`,
    height: `${contentHeight}px`,
  };

  const getcontentHeight = (node: HTMLElement) => {
    if (node && open) {
      contentHeightSet(node.offsetHeight);
    }
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="xs" {...props}>
      <Typography variant="h4" padding={1}>
        {header}
      </Typography>

      <DialogContent ref={getcontentHeight} sx={DialogContentStyles}>
        {open ? children : <CircularProgress sx={CircularProgressStyles} />}
      </DialogContent>

      <DialogActions>
        {actions}

        <Button
          variant="contained"
          onClick={onClose as MouseEventHandler<HTMLButtonElement>}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
