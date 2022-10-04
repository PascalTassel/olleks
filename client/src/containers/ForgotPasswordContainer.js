import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { actionUpdateEmailInput, actionSubmitEmail } from '../actions/forgotPassword';

function ForgotPasswordContainer() {
  const email = useSelector((state) => state.forgotPassword.email);

  const dispatch = useDispatch();

  const changeField = (key, value) => {
    dispatch(actionUpdateEmailInput(key, value));
  };

  const sendEmail = () => {
    dispatch(actionSubmitEmail());
  };

  return (
    <ForgotPassword
      email={email}
      sendEmail={sendEmail}
      changeField={changeField}
    />
  );
}

ForgotPasswordContainer.propTypes = {};
ForgotPasswordContainer.defaultProps = {};
export default React.memo(ForgotPasswordContainer);
