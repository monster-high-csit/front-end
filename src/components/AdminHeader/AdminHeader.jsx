import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.scss';

function AdminPageHeader() {
  return (
    <div className="header-navigation">
      <div className="header-navigation__logo">
        <p className="header-navigation__logo-placeholder">
          Логотип
        </p>
      </div>
      <div className="header-navigation__buttons">
        <Link to="/admin/film-creation" className="header-navigation__create-film button">
          Добавить фильм
        </Link>
        <Link to="/admin/film-edit" className="header-navigation__create-discount button">
          Редактировать фильм
        </Link>
      </div>
    </div>
  );
}

export default AdminPageHeader;
