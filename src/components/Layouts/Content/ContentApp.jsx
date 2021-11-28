import React from 'react';
import './style.scss'
import { Layout } from 'antd';

const { Content } = Layout

export const ContentApp = ({ children }) => {
  return (
      <Content className="site-layout">
        <div className="site-layout__inner" >
          {children}
        </div>
      </Content>
  )
}

