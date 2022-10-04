import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireAdmin() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const location = useLocation();

  return (
    isAdmin
      ? <Outlet />
      : <Navigate to="/users" state={{ from: location }} replace />
  );
}

RequireAdmin.propTypes = {
};
RequireAdmin.defaultProps = {
};
export default React.memo(RequireAdmin);
