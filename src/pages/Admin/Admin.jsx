import React from 'react';
import {
  useLocation,
  Outlet,
} from 'react-router-dom';

import AdminPageHeader from '../../components/AdminHeader/AdminHeader';
import './Admin.scss';

function AdminPage() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="page-container">
      <AdminPageHeader />
      <Outlet />
    </div>
  );
}

export default AdminPage;
