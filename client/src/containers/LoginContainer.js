import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateLoginInput, actionSubmitLogin } from '../actions/login';
import Login from '../components/Login/Login';

function LoginContainer() {
  const dispatch = useDispatch();

  const emailValue = useSelector((state) => state.login.email);
  const goodLogin = useSelector((state) => state.login.goodLogin);
  const passwordValue = useSelector((state) => state.login.password);

  const changeField = (name, value) => {
    dispatch(actionUpdateLoginInput(name, value));
  };

  const handleLogin = () => {
    dispatch(actionSubmitLogin());
  };
  return (
    <Login
      emailValue={emailValue}
      passwordValue={passwordValue}
      goodLogin={goodLogin}
      changeField={changeField}
      handleLogin={handleLogin}
    />
  );
}

export default React.memo(React.forwardRef(LoginContainer));
