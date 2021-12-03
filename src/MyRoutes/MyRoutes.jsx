// libs
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
// components
import { SearchPage } from '../components/SearchPage/SearchPage';
import { FilmDetalisPage } from '../components/FilmDetalisPage/FilmDetalisPage';
import { SignUp } from '../components/SignUpPage/SignUp';
import { SignIn } from '../components/SignInPage/SignIn';
import { MoviesPage } from '../components/MoviesPage/MoviesPage';
import { FavoritesPage } from '../components/FavoritesPage/FavoritesPage'
import { Page404 } from '../components/Page404/Page404';
import { Page403 } from '../components/Page403/Page403';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/movie" element={<MoviesPage />} />
      <Route path="/tv" element={<MoviesPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/:type" element={<SearchPage />} />
      <Route path="/movie/:film" element={<FilmDetalisPage />} />
      <Route path="/tv/:film" element={<FilmDetalisPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/403" element={<Page403 />} />
      <Route path="/favorites" element={
        <PrivateRoute>
          <FavoritesPage />
        </PrivateRoute>
      } />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
