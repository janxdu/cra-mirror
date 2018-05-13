import { Button, Col, Form, Input } from 'antd';
import React from 'react';

const FormItem = Form.Item;

export default class AjaxPostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 2 },
      },
      wrapperCol: {
        sm: { span: 4 },
      },
    };
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="参数1"
        >
          {getFieldDecorator('sampleParam1', {
            rules: [{
              required: true, message: '请填写参数1',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="参数2"
        >
          {getFieldDecorator('sampleParam2', {
            rules: [{
              required: true, message: '请填写参数2',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem>
          <Col span={12}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Col>

        </FormItem>
      </Form>
    );
  }
}
