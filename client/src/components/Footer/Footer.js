/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Link } from '@mui/material';
import './footer.scss';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        p: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('md')]: {
          position: 'fixed',
          width: '100vw',
          bottom: 0,
          left: 0,
        },
      }}
    >
      <Typography sx={{
        color: theme.palette.text.disabled,
      }}
      >
        <small>
          <Link
            component={RouterLink}
            to="/mentions-legales"
            sx={{
              color: theme.palette.text.disabled,
            }}
          >
            Mentions légales

          </Link>
          {' '}
          - App illustrations by Storyset - Tous droits réservés © O'lleks 2022
        </small>
      </Typography>
    </Box>
  );
}

export default React.memo(Footer);
