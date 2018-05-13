import { Breadcrumb, Layout, Menu } from 'antd';
import '@kxjf/kx-components/index.css';
import React from 'react';

import './assets/css/demo.css';
import { MENU_DATA } from './config';
import { actions, Route } from './framework/kx-mirrorx';
import AjaxGetModel from './model/dataRequest/AjaxGetModel';
import AjaxPostModel from './model/dataRequest/AjaxPostModel';
import FormsModel from './model/FormsModel';
import IconLabelPage from './page/component/IconLabelPage';
import LoginPage from './page/component/LoginPage';
import MoneyPage from './page/component/MoneyPage';
import IntroductionPage from './page/IntroductionPage';
import HeaderFooterPage from './page/layout/HeaderFooterPage';
import SidebarPage from './page/layout/SidebarPage';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  selectMenu({ item, key }) {
    actions.app.selectMenu(key);
  }

  selectMenuItem({ item, key }) {
    actions.routing.push(this.getSelectedPath(key));
  }

  getSelectedKey(location) {
    let pathname = location.pathname;
    let temp = pathname.substring(1);
    temp = temp.replace(new RegExp('/', 'g'), '-');

    return temp;
  }

  getSelectedPath(pathname) {
    let temp = pathname.replace(new RegExp('-', 'g'), '/');
    return '/' + temp;
  }

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;

    const { selectedMenu, location } = this.props;
    let selectedKey = this.getSelectedKey(location);

    let topMenus = [];
    let defaultOpenKeys = [];
    let keyNameCache = {};
    MENU_DATA.forEach(function (topMenu) {
      keyNameCache[topMenu.key] = topMenu.name;
      topMenus.push(<Menu.Item key={topMenu.key}>{topMenu.name}</Menu.Item>);
      if (topMenu.subMenus) {
        topMenu.subMenus.forEach(function (subMenu) {
          keyNameCache[subMenu.key] = subMenu.name;
          defaultOpenKeys.push(subMenu.key);
          subMenu.menuItems.forEach(function (menuItem) {
            keyNameCache[menuItem.key] = menuItem.name;
          });
        });
      }
    });

    let subMenus = [];
    // 根据 selectedMenu 生成菜单
    MENU_DATA.forEach(function (topMenu) {
      if (topMenu.key === selectedMenu) {
        if (topMenu.subMenus) {
          topMenu.subMenus.forEach(function (subMenu) {
            let subMenuItems = [];
            if (subMenu.menuItems) {
              subMenu.menuItems.forEach(function (menuItem) {
                subMenuItems.push(<Menu.Item key={menuItem.key}>{menuItem.name}</Menu.Item>);
              });
            }
            subMenus.push(
              <SubMenu key={subMenu.key} title={<span>{subMenu.name}</span>}>
                {subMenuItems}
              </SubMenu>
            );
          });
        }
      }
    });

    let breadcrumbKeys = [];
    if (selectedKey) {
      // 对selectedKey进行拆解
      let tempArray = selectedKey.split('-');
      // 进行连接
      for (let i = 0; i < tempArray.length; i++) {
        let array = [];
        for (let j = 0; j < i + 1; j++) {
          array.push(tempArray[j]);
        }
        breadcrumbKeys.push(array.join('-'));
      }
    }

    let breadcrumbItems = [];
    breadcrumbKeys.forEach(function (key) {
      breadcrumbItems.push(<Breadcrumb.Item key={key}>{keyNameCache[key]}</Breadcrumb.Item>);
    });

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            style={{ lineHeight: '64px' }}
            onClick={this.selectMenu.bind(this)}
          >
            {topMenus}
          </Menu>
        </Header>

        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultOpenKeys={defaultOpenKeys}
              style={{ height: '100%', borderRight: 0 }}
              onClick={this.selectMenuItem.bind(this)}
              selectedKeys={[selectedKey]}
            >
              {subMenus}
            </Menu>
          </Sider>


          <Layout style={{ padding: '0 24px 0 24px' }}>
            {selectedKey ? <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbItems}
            </Breadcrumb> : <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>介绍</Breadcrumb.Item>
            </Breadcrumb>}

            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route exact path="/" component={IntroductionPage} />
              <Route path="/component/common/login" component={LoginPage} />
              <Route path="/component/common/money" component={MoneyPage} />
              <Route path="/component/common/iconLabel" component={IconLabelPage} />
              <Route path="/commonLayout/page/headerFooter" component={HeaderFooterPage} />
              <Route path="/commonLayout/page/sidebar" component={SidebarPage} />
              <Route path="/dataRequest/ajax/get" component={AjaxGetModel} />
              <Route path="/dataRequest/ajax/post" component={AjaxPostModel} />
              <Route exact path="/forms" component={FormsModel} />
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          开鑫金服 ©2018
        </Footer>
      </Layout>
    );
  }
}
