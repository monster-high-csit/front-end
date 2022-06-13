import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminPageHeader from '../../components/AdminHeader/AdminHeader';
import './Admin.scss';

function AdminPage() {
  return (
    <div className="page-container">
      <AdminPageHeader />
      <Outlet />
    </div>
  );
}

export default AdminPage;
