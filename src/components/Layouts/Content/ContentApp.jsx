import React from 'react';
import { Layout } from 'antd';
import background from '../../../img/background.jpg';
import './style.scss';

const { Content } = Layout

export const ContentApp = ({ children }) => {
  return (
    <Content className="site-layout">
      <div
        className="site-layout__inner"
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
    </Content>
  )
}
