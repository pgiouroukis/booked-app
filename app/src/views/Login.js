import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import firestore from "../utils/firestore"
import WithoutAuth from "../utils/WithoutAuth"
import EmptyLayout from "../layouts/Empty"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Col,
    Row,
    Button,
    Form,
    FormInput,
    FormGroup,
    Alert
} from "shards-react";

function Login(props) {
    var [authed,setAuthed] = useState(false)
    
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")

    //pre-submit alerts
    var [fillAllAlert, setFillAllAlert] = useState(false)

    //after-submit alerts
    var [wrongCredsAlert, setWrongCredsAlert] = useState(false)
    var [showLoader, setShowLoader] = useState(false)

    const handleSave = async () => {
        setFillAllAlert(false)
        setWrongCredsAlert(false)
        setShowLoader(true)

        if ( email === "" || password === "") {
            setFillAllAlert(true);
            return;
        }
        
        const data = {
            email: email,
            password: password
        }

        const db = firestore.firestore();
        db.collection("test").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
            });
        })


    }

    const main = () => {
        if (authed) return(<Redirect to="/dashboard"/>)
        else return(
        <EmptyLayout>
            <Container fluid className="main-content-container mt-sm-5 mt-5">
                <Row>
                    <Col md="4" sm="0"></Col>
                    <Col md="4" sm="12">
                        <Card>
                            <CardBody>
                                {wrongCredsAlert &&
                                    <Alert className="text-center" style={{ backgroundColor: "#FFE8E9", borderRadius: "5px", color: "#CC3333" }}>
                                        Wrong Credentials{" "}
                                    </Alert>
                                }
                                {showLoader &&
                                    <div className="text-center" style={{ width: "100%" }}>
                                        <ClipLoader size={25} color={"#123abc"} />
                                    </div>
                                }
                                {fillAllAlert &&
                                    <Alert className="text-center" style={{ backgroundColor: "#FFE8E9", borderRadius: "5px", color: "#CC3333" }}>
                                        Please fill your information
                                    </Alert>
                                }

                                <CardTitle tag="h2" className="text-center">
                                    <span>Login</span>
                                </CardTitle>
                                <CardSubtitle className="mt-sm-2 mt-2 text-center">
                                    Please fill your information
                                </CardSubtitle>
                                <Form className="mt-sm-3 mt-3">
                                    <FormGroup>
                                        <label htmlFor="#username" style={{ fontSize: "22px", cursor: "default" }}>Email</label>
                                        <FormInput
                                            type="email"
                                            id="#username"
                                            placeholder="e.g. semantic@gmail.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="#password" style={{ fontSize: "22px", cursor: "default" }}>Password</label>
                                        <FormInput
                                            type="password"
                                            id="#password"
                                            placeholder="keep this a secret!"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                    <Row className="mt-sm-3 mt-3 ">
                                        <Col md="1" sm="0"></Col>
                                        <Col md="10" sm="10">
                                            <Button pill block size="lg" onClick={handleSave}>
                                                Login
                                            </Button>
                                        </Col>
                                        <Col md="1" sm="0"></Col>
                                    </Row>
                                    <hr></hr>
                                    <Row
                                        style={{ width: "100%" }}
                                        className="text-center"
                                    >
                                        <Col md="1" sm="0"></Col>
                                        <Col md="10" sm="10">
                                            <a href="/">
                                                <u>I forgot my password</u>
                                            </a>
                                            <br></br>
                                            <div style={{ marginTop: "1%" }}>
                                                <Link to="/register">
                                                    <u>Create a free account</u>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col md="1" sm="0"></Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" sm="0"></Col>
                </Row>
            </Container>
        </EmptyLayout>
    )}

    return (main())

}

export default WithoutAuth(Login)