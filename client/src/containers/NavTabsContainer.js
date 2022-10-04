import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavTabs from '../components/NavTabs/NavTabs';

function NavTabsContainer() {
  const location = useLocation();
  const isLogged = useSelector((state) => state.login.isLogged);
  const userId = useSelector((state) => state.user.id);

  if (location.pathname.match(`/admins/${userId}/profil`)) {
    return null;
  }

  return (
    <NavTabs
      isLogged={isLogged}
      userId={userId}
    />
  );
}

NavTabsContainer.propTypes = {
};

export default React.memo(NavTabsContainer);
