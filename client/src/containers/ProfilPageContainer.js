import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateUserInput, actionUpdateUserInformations } from '../actions/user';
import ProfilPage from '../components/ProfilPage/ProfilPage';

function ProfilPageContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const user = useSelector((state) => state.user);

  const userEmail = useSelector((state) => state.login.email);

  const dispatch = useDispatch();

  const changeField = (name, value) => {
    dispatch(actionUpdateUserInput(name, value));
  };

  const updateUserInformations = () => {
    dispatch(actionUpdateUserInformations());
  };

  return (
    <ProfilPage
      isLogged={isLogged}
      user={user}
      changeField={changeField}
      updateUserInformations={updateUserInformations}
      userPassword={user.password}
      userConfirmPassword={user.confirmPassword}
      userEmail={userEmail}
    />
  );
}

ProfilPageContainer.propTypes = {
};

export default React.memo(ProfilPageContainer);
