import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from './HOC/PrivateRoute';
import { Layout } from 'antd';

import { HeaderApp } from './components/Layouts/Header/HeaderApp';
import { ContentApp } from './components/Layouts/Content/ContentApp';
import { SiderApp } from './components/Layouts/Sider/SiderApp';
import { FilmsPage } from './components/FilmsPage/FilmsPage';
import { CurrentFilmPage } from './components/CurrentFilmPage/CurrentFilmPage';
import { SignUp } from './components/SignUpPage/SignUp';
import { SignIn } from './components/SignInPage/SignIn';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className='app'>
          <HeaderApp />
          <ContentApp>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/films" element={<FilmsPage />} />
              <Route path="/films/:film" element={<CurrentFilmPage />} />
              <Route path="/sign-in" element={<SignIn />} />
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
