import { Menu } from 'antd';
import { SiderApp } from './SiderApp';
//import { useLocation } from 'react-router';

//const { SubMenu } = Menu

export const MoviesSider = (props) => {
  //const location = useLocation()
  //const currentLocation = location.pathname.split('/').pop()
  
  return (
    <SiderApp {...props} >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
      </Menu>
    </SiderApp>
  )
}
