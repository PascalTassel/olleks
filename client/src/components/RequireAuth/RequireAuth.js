import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireAuth() {
  const isLogged = useSelector((state) => state.login.isLogged);
  const location = useLocation();
  return (
    isLogged
      ? <Outlet />
      : <Navigate to="/" state={{ from: location }} replace />
  );
}

RequireAuth.propTypes = {
};
RequireAuth.defaultProps = {
};
export default React.memo(RequireAuth);
