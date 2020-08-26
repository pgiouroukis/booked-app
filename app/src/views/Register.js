import React from "react";
import {
    Container,
    Col,
    Row
} from "react-bootstrap";
import {Card, Divider} from "antd"
//import Temp from "../components/Temp"
import RegisterUser from "../components/RegisterView"

export default () => {

    return (
        <Container fluid className="main-content-container mt-sm-5 mt-5">
            <Row>
                <Col md="4" sm="0"></Col>
                <Col md="4" sm="12">
                    <Card style={{borderRadius:"15px"}}>
                        <div className="d-flex justify-content-center">
                            <h2>Create an Account</h2>
                        </div>
                        <Divider />
                        <Row>
                            <Col md="12" sm="12">
                                <RegisterUser />
                            </Col>
                        </Row>
                    </Card>                    
                </Col>
                <Col md="4" sm="0"></Col>
            </Row>
        </Container>
    )
};