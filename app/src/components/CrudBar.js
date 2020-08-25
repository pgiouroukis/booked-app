import React from "react"
import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle,
    Form, FormInput, FormGroup,
    Button
} from "shards-react";

const CrudBar = (props) => {

    return(
        <Container className="sticky-top" style={{top:"70px"}} fluid >
            <Card>
                <CardBody style={{padding:"15px"}}>
                    <Row>
                        <Col xs="6">.</Col>
                        <Col xs="6">
                            <div className="float-right">
                                <Button className="d-none d-md-block" theme="success" style={{fontSize:"18px"}} onClick={props.onSaveClick}>
                                    <span>Αποθήκευση</span>
                                </Button>
                                <Button className="d-block d-md-none" pill theme="success" style={{ fontSize: "18px" }} onClick={props.onSaveClick}>
                                    <span class="material-icons">save</span>
                                </Button>

                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )

}

export default CrudBar