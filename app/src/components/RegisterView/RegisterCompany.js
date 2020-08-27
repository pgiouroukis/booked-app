import React, { useContext, useState } from 'react';
import RegisterContext from "./RegisterContext"
import firebase from "../../utils/firebase";
import {
    Form,
    Input,
    Checkbox,
    Button, 
    Alert
} from 'antd';
import ClipLoader from "react-spinners/ClipLoader";
import LocationSearchInput from "../Maps/LocationSearchInput";

window.localStorage.removeItem("addressFlag")

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
        if (window.localStorage.getItem("addressFlag") === "false" || window.localStorage.getItem("addressFlag") === null) {
            setLoader(false)
            setAlert(true)
            return;
        } else {
            //post data here
        }
            
        /*
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            console.log("success: ", res);
            setLoader(false)
            context.increaseStep();
        } catch (err) {
            console.log("error: ", err)
        }
        */
        /*
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        */
    };

    return (

        <div>
            <div style={{ width: "100%" }} className="text-center" >
                {loader && <ClipLoader size={25} color={"#1890FF"} />}
                {alert && <><Alert
                    style={{ backgroundColor: "#FFE8E9", border: "0px", borderRadius: "5px" }}
                    message={<span style={{ color: "#c33" }}>Please pick a valid address</span>}
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
                    name="name"
                    label={<span style={{ fontSize: "20px" }}>Business Name</span>}
                    rules={[{ required: true, message: 'Please input your Business Name',}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={<span style={{ fontSize: "20px" }}>Business Phone</span>}
                    rules={[{required: true}]}
                    help="Please include the country prefix too!"
                >
                    <Input type="tel"/>
                </Form.Item><br></br>

                <Form.Item
                    name="confirm"
                    label={<span style={{ fontSize: "20px" }}>Business Address</span>}
                >
                    <LocationSearchInput/>
                    <div style={{ color: "rgba(0, 0, 0, 0.45)"}}>Start typing the full adress and click when you see the proper one</div>
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


/*

            <Alert
                style={{ backgroundColor: "#FF4D4F", border:"0px", borderRadius:"5px"}}
                message={<span style={{color:"white"}}>Please do that!</span>}
                type="warning"
            /><br></br>


*/