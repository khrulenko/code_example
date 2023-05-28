const MuiTableRow = {
  styleOverrides: {
    root: () => ({
      button: {
        visibility: 'hidden',
      },

      '&:hover': {
        button: {
          visibility: 'visible',
        },
      },
    }),
  },
};

export default MuiTableRow;
