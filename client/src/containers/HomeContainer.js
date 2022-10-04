import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../components/HomePage/HomePage';

function HomeContainerContainer() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const userId = useSelector((state) => state.user.id);

  if (isLogged) {
    if (isAdmin) {
      return <Navigate to="/admins/planning" replace />;
    }

    return <Navigate to={`/users/${userId}/planning`} replace />;
  }

  return (
    <Home />
  );
}

HomeContainerContainer.propTypes = {};
HomeContainerContainer.defaultProps = {};
export default React.memo(HomeContainerContainer);
