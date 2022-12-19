import { Backdrop, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Backdrop
      sx={{
        background:
          'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
      }}
      open
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
