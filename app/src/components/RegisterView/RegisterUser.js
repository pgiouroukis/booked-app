import React, {useContext, useState} from 'react';
import RegisterContext from "./RegisterContext"
import firebase from "../../utils/firebase";
import {
    Form,
    Input,
    Checkbox,
    Button, Alert
} from 'antd';
import ClipLoader from "react-spinners/ClipLoader";

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

export default () => {
    var [loader, setLoader] = useState(false)
    var [alert, setAlert] = useState(false)
    
    const context = useContext(RegisterContext)
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        setLoader(true)
        setAlert(false)
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            console.log("success: ", res);
            context.increaseStep();
        } catch (err) {
            console.log("error: ", err)
            if (err.code === "auth/email-already-in-use")
                setAlert(true)
        }
        setLoader(false)
    };

    return (

        <div>
            <div style={{ width: "100%" }} className="text-center" >
                {loader && <ClipLoader size={25} color={"#1890FF"} />}
                {alert && <><Alert
                    style={{ backgroundColor: "#FFE8E9", border: "0px", borderRadius: "5px" }}
                    message={<span style={{ color: "#c33" }}>This email address is already registered.</span>}
                    type="warning"
                /><br></br></>}
            </div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    label={<span style={{ fontSize: "20px" }}>Email</span>}
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
                    label={<span style={{ fontSize: "20px" }}>Password</span>}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: (_, value) => {
                                if (value.length >= 8) return Promise.resolve()
                                else return Promise.reject('Password must be at least 8 characters!')
                            }
                        }

                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label={<span style={{ fontSize: "20px" }}>Repeat Password</span>}
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
                    <Button style={{ float: "right" }} type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form></div>

    );
};