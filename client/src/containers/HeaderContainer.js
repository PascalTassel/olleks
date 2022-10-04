import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionLogout } from '../actions/login';
import { actionSetUserLogout } from '../actions/user';
import Header from '../components/Header/Header';

function HeaderContainer({
  handleMode,
}) {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actionLogout());
    dispatch(actionSetUserLogout());
  };

  return (
    <Header
      isLogged={isLogged}
      user={user}
      handleMode={handleMode}
      handleLogout={handleLogout}
    />
  );
}

HeaderContainer.propTypes = {
  handleMode: PropTypes.func.isRequired,
};

export default React.memo(HeaderContainer);
