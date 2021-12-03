// libs
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
// components 
import { HeaderApp } from './components/Layouts/Header/HeaderApp';
import { ContentApp } from './components/Layouts/Content/ContentApp';
import { MyRoutes } from './MyRoutes/MyRoutes';
import { Layout } from 'antd';
// other
import store from './store/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout className='app'>
          <HeaderApp />
          <ContentApp>
            <MyRoutes />
          </ContentApp>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
