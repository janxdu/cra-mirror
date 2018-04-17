import { Breadcrumb, Layout, Menu } from 'antd';
import 'kx-components/index.css';
import React from 'react';
import { actions, Route } from './framework/kx-mirrorx';
import FormsModel from './model/FormsModel';
import IconLabelPage from './page/component/IconLabelPage';
import LoginPage from './page/component/LoginPage';
import MoneyPage from './page/component/MoneyPage';
import IntroductionPage from './page/IntroductionPage';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  selectMenu({ item, key, keyPath }) {
    actions.app.selectMenu(key);
  }

  selectMenuItem({ item, key, keyPath }) {
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
            <Menu.Item key="component">组件</Menu.Item>
            <Menu.Item key="commonLayout">常见布局</Menu.Item>
            <Menu.Item key="dataRequest">数据请求</Menu.Item>
            <Menu.Item key="loading">预载/切换</Menu.Item>
            <Menu.Item key="forms">表单</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultOpenKeys={[
                'component-common',
                'commonLayout-page',
                'commonLayout-component',
                'dataRequest-effect',
                'dataRequest-saga',
                'dataRequest-file',
                'loading-spin',
                'forms-validation',
                'forms-layout']}
              style={{ height: '100%', borderRight: 0 }}
              onClick={this.selectMenuItem.bind(this)}
              selectedKeys={[selectedKey]}
            >
              {selectedMenu === 'component' &&
              <SubMenu key="component-common" title={<span>通用</span>}>
                <Menu.Item key="component-common-login">登录框</Menu.Item>
                <Menu.Item key="component-common-iconLabel">带提示的图标</Menu.Item>
                <Menu.Item key="component-common-money">货币显示</Menu.Item>
              </SubMenu>
              }

              {selectedMenu === 'commonLayout' &&
              <SubMenu key="commonLayout-page" title={<span>页面</span>}>
                <Menu.Item key="commonLayout-page-headerFooter">Header+Footer</Menu.Item>
                <Menu.Item key="commonLayout-page-sidebar">左侧边栏</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'commonLayout' &&
              <SubMenu key="commonLayout-component" title={<span>组件</span>}>
                <Menu.Item key="commonLayout-component-item">项目条目</Menu.Item>
                <Menu.Item key="commonLayout-component-detail">项目详情</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'dataRequest' &&
              <SubMenu key="dataRequest-effect" title={<span>Mirror Effect</span>}>
                <Menu.Item key="dataRequest-effect-get">Get</Menu.Item>
                <Menu.Item key="dataRequest-effect-post">Post</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'dataRequest' &&
              <SubMenu key="dataRequest-saga" title={<span>Mirror Saga</span>}>
                <Menu.Item key="dataRequest-saga-latest">Latest</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'dataRequest' &&
              <SubMenu key="dataRequest-file" title={<span>文件</span>}>
                <Menu.Item key="dataRequest-file-upload">上传</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'loading' &&
              <SubMenu key="loading-spin" title={<span>转转转</span>}>
                <Menu.Item key="loading-spin-page">页面</Menu.Item>
                <Menu.Item key="loading-spin-fragment">内部块</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'forms' &&
              <SubMenu key="forms-validation" title={<span>校验</span>}>
                <Menu.Item key="forms-validation-general">普通校验</Menu.Item>
                <Menu.Item key="forms-validation-ajax">AJAX校验</Menu.Item>
              </SubMenu>
              }
              {selectedMenu === 'forms' &&
              <SubMenu key="forms-layout" title={<span>表单布局</span>}>
                <Menu.Item key="forms-layout-labelValue">Label/Value</Menu.Item>
              </SubMenu>
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route exact path="/" component={IntroductionPage} />
              <Route path="/component/common/login" component={LoginPage} />
              <Route path="/component/common/money" component={MoneyPage} />
              <Route path="/component/common/iconLabel" component={IconLabelPage} />
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
