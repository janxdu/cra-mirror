import { Col, Icon, Layout, Row } from 'antd';
import React from 'react';

const { Header, Footer, Content } = Layout;
const HeaderFooterPage = () => (
  <section>
    <h1>场景</h1>
    <section>
      类似FreeMarker中的layout功能,给出了常见的布局的解决方案。
    </section>
    <h2 className="demo-title">演示</h2>
    <Row>
      <Col span={24}>
        <section className="demo-box">
          <Row>
            <Col span={24}>
              <Layout>
                <Header className="kx-header">
                  <div className="kx-logo">
                    <a href="https://www.kxjf.com"><img src="https://www.kxjf.com/cms/resources/temps/logo.png" /></a>
                    <a href="https://www.kxjf.com/cms/aboutKxd/index.html"><img
                      src="https://www.kxjf.com/cms/cmsResource/temps/slogan.png" /></a>
                  </div>
                  <div className="kx-header-menu-main">
                    <ul className="kx-clearfix ">
                      <li className="kx-header-menu-item">
                        <a href="#" className="current">首页</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#">开金中心</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#">开鑫贷</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" target="_blank">企业投资</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" target="_blank">借款</a>
                      </li>
                      <li className="kx-header-menu-item">
                        <a href="#" className="enter-my-account">
                          <span>
                            <Icon type="user" style={{ fontSize: '20px', marginRight: '10px'}} />我的账户
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Header>
                <Content>
                  <div className="kx-demo-body">
                    这里是内容
                  </div>
                </Content>
                <Footer style={{ backgroundColor: '#414141' }}>
                  这里是Footer
                </Footer>
              </Layout>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  </section>
);

export default HeaderFooterPage;
