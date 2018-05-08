import { Col, Row } from 'antd';
import { PasswordInput, UsernameInput } from '@kxjf/kx-components';
import React from 'react';

const LoginPage = () => (
  <section>
    <h1>场景</h1>
    <section>
      用于登陆时的用户名、密码输入。
    </section>
    <h2 className="demo-title">演示</h2>
    <Row>
      <Col span={6}>
        <section className="demo-box">
          <Row>
            <Col span={24}>
              <UsernameInput />
            </Col>
          </Row>
          <Row style={{ marginTop: '15px' }}>
            <Col span={24}>
              <PasswordInput />
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  </section>
);

export default LoginPage;
