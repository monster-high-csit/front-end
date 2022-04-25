import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminPage from './pages/Admin/Admin';
import AdminPageContent from './pages/Admin/AdminContent/AdminContent';
import AdminFilmEditContent from './pages/AdminFilmEdit/AdminFilmEditContent';

function App() {
  return (
    <Routes>
      <Route index element={<p>Main Page</p>} />
      <Route path="admin" element={<AdminPage />}>
        <Route path="film-creation" element={<AdminPageContent />} />
        <Route path="film-edit" element={<AdminFilmEditContent />} />
      </Route>
    </Routes>
  );
}

export default App;
