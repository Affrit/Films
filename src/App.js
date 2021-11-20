import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from './HOC/PrivateRoute';
import { Layout } from 'antd';

import { HeaderApp } from './components/Layouts/Header/HeaderApp';
import { ContentApp } from './components/Layouts/Content/ContentApp';
import { SearchPage } from './components/SearchPage/SearchPage';
import { CurrentFilmPage } from './components/CurrentFilmPage/CurrentFilmPage';
import { SignUp } from './components/SignUpPage/SignUp';
import { SignIn } from './components/SignInPage/SignIn';
import { MoviesPage } from './components/MoviesPage/MoviesPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className='app'>
          <HeaderApp />
          <ContentApp>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/movie" element={<SearchPage />} />
              <Route path="/search/tv" element={<SearchPage />} />
              <Route path="/films/:film" element={<CurrentFilmPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/favorites" element={
                <PrivateRoute>

                </PrivateRoute>
              } />
              <Route path="*" element={'404 page'} />
            </Routes>
          </ContentApp>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
