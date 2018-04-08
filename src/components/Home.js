import { Button } from 'antd';
import React from 'react';
import { IconTip, PasswordInput, UsernameInput } from 'kx-components';
import 'kx-components/index.css';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Button type="primary">Button5</Button>
    <PasswordInput placeholder="请输入密码" value="12345678" size="large" />
    <UsernameInput placeholder="请输入用户名" value="12345678" size="large" />
    <IconTip icon="user" tip="这里一段描述" style={{ fontSize: '30px' }} />
  </div>
);

export default Home;
