/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Avatar, Box, Button, Link, Menu, MenuItem, Modal, Toolbar, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LoginContainer from '../../containers/LoginContainer';
import logo from './logo.svg';
import './header.scss';

function Header({
  handleMode,
  handleLogout,
  isLogged,
  user,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [modalOpened, setModalOpened] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userMenuOpened = Boolean(anchorEl);

  const handleModal = () => {
    setModalOpened((stateModal) => !stateModal);
  };

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="header">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: {
            sm: theme.spacing(2),
          },
          paddingLeft: {
            sm: theme.spacing(2),
          },
        }}
      >
        <RouterLink to="/">
          <Box
            component="img"
            src={logo}
            alt="O'lleks"
            sx={{
              height: 30,
              [theme.breakpoints.up('md')]: {
                height: 40,
              },
            }}
          />
        </RouterLink>

        {!isLogged
          ? (
            <Button
              onClick={handleModal}
              variant="outlined"
              size="small"
              sx={{
                ml: 'auto',
                mr: theme.spacing(1),
                display: {
                  md: 'none',
                },
              }}
            >
              Connexion
            </Button>
          )
          : (
            <Box
              sx={{
                ml: 'auto',
                mr: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(2),
                },
              }}
            >
              <Box
                component={Link}
                color="inherit"
                underline="none"
                id="userBtn"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing(1),
                  cursor: 'pointer',
                }}
                onClick={handleUserMenu}
              >
                <Avatar
                  alt={`${user.firstname} ${user.lastname}`}
                  src={user.avatar}
                  sx={{ width: 36, height: 36 }}
                />
                <Box
                  component="span"
                  sx={{
                    whiteSpace: 'noWrap',
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}
                >
                  {`${user.firstname} ${user.lastname}`}
                </Box>
              </Box>
              <Menu
                id="userBtn"
                anchorEl={anchorEl}
                open={userMenuOpened}
                onClose={handleUserMenuClose}
                onClick={handleUserMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem component={RouterLink} to={`/${user.isAdmin ? 'admins' : 'users'}/${user.id}/profil`}>Profil</MenuItem>
                <MenuItem component={Link} onClick={handleLogout}>Déconnexion</MenuItem>
              </Menu>
            </Box>
          )}

        <ThemeSwitch
          onChange={handleMode}
        />
      </Toolbar>

      {!isLogged && isMobile
        && (
        <Modal
          sx={{
            width: '90vw',
            maxWidth: '30rem',
            mx: 'auto',
            mt: '25vh',
          }}
          open={modalOpened}
          onClose={handleModal}
        >
          <LoginContainer />
        </Modal>
        )}
    </AppBar>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleMode: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
Header.defaultProps = {
};
export default React.memo(Header);
