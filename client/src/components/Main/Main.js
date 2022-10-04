import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import Sidebar from '../Sidebar/Sidebar';
import './main.scss';

function Main(props) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(3, 6),
          flexGrow: 1,
          '.opened ~ &': {
            maxWidth: 'calc(100vw - 240px)',
          },
          boxSizing: 'border-box',
          overflow: 'hidden',
        },
        [theme.breakpoints.down('md')]: {
          width: '100%',
          minHeight: '100vh',
          padding: theme.spacing(3, 2),
        },
      }}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Main);
