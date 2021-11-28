import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Layout } from 'antd';

import { HeaderApp } from './components/Layouts/Header/HeaderApp';
import { ContentApp } from './components/Layouts/Content/ContentApp';
import { SearchPage } from './components/SearchPage/SearchPage';
import { FilmDetalisPage } from './components/FilmDetalisPage/FilmDetalisPage';
import { SignUp } from './components/SignUpPage/SignUp';
import { SignIn } from './components/SignInPage/SignIn';
import { MoviesPage } from './components/MoviesPage/MoviesPage';
import { FavoritesPage } from './components/FavoritesPage/FavoritesPage'
import { Page404 } from './components/Page404/Page404';
import { Page403 } from './components/Page403/Page403';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className='app'>
          <HeaderApp />
          <ContentApp>
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
          </ContentApp>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
