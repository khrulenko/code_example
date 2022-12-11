import { Backdrop, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: 'background.default',
      }}
      open
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
