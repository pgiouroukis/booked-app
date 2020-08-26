import React from 'react';
import {
    Form,
    Input,
    Checkbox,
    Button,
} from 'antd';

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

export default () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
        >
            <Form.Item
                name="email"
                label={<span style={{fontSize:"20px"}}>Email</span>}
                hasFeedback
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label={<span style={{fontSize:"20px"}}>Password</span>}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label={<span style={{fontSize:"20px"}}>Repeat Password</span>}
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
            >
                <Checkbox>
                    I have read the <a href="/">agreement</a> and I accept the <a href="/">terms and conditions</a>
                </Checkbox>
            </Form.Item><hr></hr><br></br>
            <Form.Item>
                <Button style={{float:"right"}} type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>            
        </Form>
    );
};