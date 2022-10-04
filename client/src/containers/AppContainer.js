import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAppMount } from '../actions';
import App from '../components/App/App';

function AppContainer() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(actionAppMount());
  }, []);

  return (
    <App isAdmin={isAdmin} userId={userId} />
  );
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};
export default React.memo(AppContainer);
