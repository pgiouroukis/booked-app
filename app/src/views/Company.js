import React from "react";
import CrudBar from "../components/CrudBar"
import { 
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, 
    Form, FormInput, FormGroup, 
    Button
} from "shards-react";

import WithAuth from "../utils/WithAuth"
import DefaultLayout from "../layouts/Default"


const Dashboard = ({ smallStats }) => {

    return (
        <DefaultLayout>
            <Container fluid className="main-content-container">
                <br></br>
                <CrudBar onSaveClick={()=>{alert("gaha")}}/>
                <br></br>
                <Card>
                    <CardBody>
                        <CardTitle tag="h2">
                            <span>Η εταιρεία σας</span>
                        </CardTitle>
                        <CardSubtitle className="mt-sm-2 mt-2">
                            Παρακάτω βρίσκονται τα στοιχεία της εταιρεία σας
                        </CardSubtitle>
                        <Row>
                            <Col xs="12" md="4">
                                <Form className="mt-sm-3 mt-3">
                                    <FormGroup>
                                        <label htmlFor="#username" style={{ fontSize: "22px", cursor: "default" }}>Email</label>
                                        <FormInput
                                            type="email"
                                            id="#username"
                                            placeholder="π.χ. semantic@gmail.com"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="#password" style={{ fontSize: "22px", cursor: "default" }}>Κωδικός</label>
                                        <FormInput
                                            type="password"
                                            id="#password"
                                            placeholder="διατηρήστε τον κωδικό σας μυστικό!"
                                        />
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

            </Container>
        </DefaultLayout>
    )
};

export default WithAuth(Dashboard);