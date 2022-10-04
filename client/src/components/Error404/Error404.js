/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@emotion/react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './error404.scss';
import errorimg from '../../Assets/images/404img.svg';

function Error404() {
  const theme = useTheme();

  return (
    <Box sx={{
      position: 'relative',
      textAlign: {
        xs: 'center',
      },
      backgroundImage: `url(${errorimg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Box
        sx={{
          mt: theme.spacing(20),
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontSize: {
              xs: '2em',
              md: theme.typography.h2.fontSize,
            },
            mb: theme.spacing(2),
          }}
        >
          Il n'y a rien ici !
        </Typography>
        <Link
          to="/"
          sx={{
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
          >
            Revenir sur le site

          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default React.memo(Error404);
