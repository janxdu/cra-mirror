import { Button, Form } from 'antd';
import { PasswordInput, UsernameInput } from 'kx-components';
import { actions } from 'mirrorx';
import React from 'react';

export default class KxUserLoginForm extends React.Component {
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
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Item
          {...formItemLayout}
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请填写用户名。',
            }],
          })(
            <UsernameInput />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请填写密码。',
            }],
          })(
            <PasswordInput />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
        >
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
