import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import Layout from '../Layout/Layout';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import HomeContainer from '../../containers/HomeContainer';
import Error404 from '../Error404/Error404';
import Legals from '../Legals/Legals';
import RequireAuth from '../RequireAuth/RequireAuth';
import RequireAdmin from '../RequireAdmin/RequireAdmin';
import RequireUser from '../RequireUser/RequireUser';
import utils from '../../utils';
import PlanningAdminContainer from '../../containers/PlanningAdminContainer';
import PlanningContainer from '../../containers/PlanningContainer';
import DatagridEmployeeContainer from '../../containers/DatagridEmployeeContainer';
import DatagridSiteContainer from '../../containers/DatagridSiteContainer';
import DatagridCompanyContainer from '../../containers/DatagridCompanyContainer';
import ProfilPageContainer from '../../containers/ProfilPageContainer';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer';
import ResetPassword from '../ResetPassword/ResetPassword';

function App({
  isAdmin,
  userId,
}) {
  const [mode, setMode] = useState(utils.themeFunctions.getThemeMode());
  const theme = responsiveFontSizes(utils.getTheme(mode));

  const handleThemeMode = (themeMode) => {
    utils.themeFunctions.setThemeMode(themeMode);
    setMode(themeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="app"
        sx={{
          backgroundColor: theme.palette.background.default,
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            minHeight: '100vh',
          },
          [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(6),
          },
        }}
      >
        <HeaderContainer
          handleMode={handleThemeMode}
        />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route element={<RequireAuth />}>
            <Route element={<RequireAdmin />}>
              <Route path="admins" element={<Layout isAdmin={isAdmin} />}>
                <Route
                  path={`:${userId}/profil`}
                  element={(
                    <ProfilPageContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path="planning"
                  element={(
                    <PlanningAdminContainer />
                    )}
                >
                  <Route
                    path=":weekSlug"
                    element={(
                      <PlanningAdminContainer />
                      )}
                  />
                </Route>
                <Route
                  path="employees"
                  element={(
                    <DatagridEmployeeContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path="sites"
                  element={(
                    <DatagridSiteContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path="companies"
                  element={(
                    <DatagridCompanyContainer isAdmin={isAdmin} />
                    )}
                />
                <Route
                  path={`/admins/${userId}/profil`}
                  element={(
                    <ProfilPageContainer isAdmin={isAdmin} />
                    )}
                />
              </Route>
            </Route>
            <Route element={<RequireUser />}>
              <Route path="users" element={<Layout isAdmin={isAdmin} />}>
                <Route
                  path={`:${userId}/planning`}
                  element={(
                    <PlanningContainer />
                    )}
                >
                  <Route
                    path=":weekSlug"
                    element={(
                      <PlanningContainer />
                      )}
                  />
                </Route>
                <Route
                  path={`:${userId}/profil`}
                  element={(
                    <ProfilPageContainer isAdmin={isAdmin} />
                    )}
                />
              </Route>
            </Route>
          </Route>
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
          <Route path={`/reset-password/${userId}/{token}`} element={<ResetPassword />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

App.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
};

export default React.memo(App);
