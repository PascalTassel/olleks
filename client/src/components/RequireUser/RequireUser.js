import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireUser() {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const location = useLocation();

  return (
    !isAdmin
      ? <Outlet />
      : <Navigate to="admins" state={{ from: location }} replace />
  );
}

RequireUser.propTypes = {
};
RequireUser.defaultProps = {
};
export default React.memo(RequireUser);
