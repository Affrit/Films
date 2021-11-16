import { Layout, Menu } from 'antd';

const { Sider } = Layout

export const SiderApp = ({ children }) => {
  return (
    <Layout>
      <Sider theme='dark' width={200} className="site-layout-background" collapsible breakpoint="lg" style={{
        minHeight: '100vh',
      }} >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          { children }
        </Menu>
      </Sider>
    </Layout>
  )
}
