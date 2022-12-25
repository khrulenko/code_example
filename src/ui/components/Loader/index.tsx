import { Backdrop, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Backdrop
      sx={{
        background: 'transparent',
      }}
      open
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
