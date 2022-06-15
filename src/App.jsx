import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminPage from './pages/Admin/Admin';
import AdminPageContent from './pages/Admin/AdminContent/AdminContent';
import AdminFilmEditContent from './pages/AdminFilmEdit/AdminFilmEditContent';
import FilmDetailsPage from './pages/FilmDetails/FilmDetailsPage';

import MainPage from './components/mainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="admin" element={<AdminPage />}>
        <Route path="film-creation" element={<AdminPageContent />} />
        <Route path="film-edit" element={<AdminFilmEditContent />} />
      </Route>
      <Route path="film/:id" element={<FilmDetailsPage />} />
    </Routes>
  );
}

export default App;
