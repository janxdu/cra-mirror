import { Button, Form, Input } from 'antd';
import React from 'react';
import { actions } from '../components/kx-mirrorx';

export default class UserLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        actions.forms.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Item
          {...formItemLayout}
          label="用户名"
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请填写用户名。',
            }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请填写密码。',
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>

        <Form.Item
          {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
