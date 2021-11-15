import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export const ContentApp = ({ children }) => {
  return (
      <Content className="site-layout" style={{ padding: '0 50px'}}>
        <div className="site-layout-background" style={{ display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
      </Content>
  )
}

