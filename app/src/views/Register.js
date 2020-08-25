import React, {useState} from "react";
import api from "../utils/api"
import {Link} from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import WithoutAuth from "../utils/WithoutAuth"
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

function Register() {

    var [name, setName] = useState("");
    var [surname, setSurname] = useState("")
    var [email, setEmail] = useState("")
    var [afm, setAfm] = useState("")
    var [password1, setPassword1] = useState("")
    var [password2, setPassword2] = useState("")

    //pre-submit alerts
    var [showGeneralErrorAlert, setShowGeneralErrorAlert] = useState(false)
    var [generalError, setGeneralError] = useState("")

    //after-submit alerts
    var [showErrorAlert, setShowErrorAlert] = useState(false)
    var [showSuccessAlert, setShowSuccessAlert] = useState(false)
    var [showLoader, setShowLoader] = useState(false)

    var handleSave = async () => {
        setShowGeneralErrorAlert(false)
        setShowErrorAlert(false)
        if (name === "" || surname === "" || email === "" || afm === "" || password1 === "") {
            setGeneralError("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία")
            setShowGeneralErrorAlert(true)
            return;
        }

        if (password1 !== password2){
            setGeneralError("Η επανάληψη κωδικού δεν ήταν σωστή.")
            setShowGeneralErrorAlert(true)
            return;
        }
        setShowLoader(true)
        var data = {
            name : name,
            surname : surname,
            email : email,
            afm : afm, 
            password : password1
        }

        try {

            const response = await api("/register/user", "POST", data)
            setShowLoader(false)
            if (response.success) 
                setShowSuccessAlert(true)
            else 
                setShowErrorAlert(true)
            
                
        } catch (err) {
            console.log(err)
        }
    }   

    return (
        <Container fluid className="main-content-container mt-sm-5 mt-5">
            <Row>
                <Col md="3" sm="0"></Col>
                <Col md="6" sm="12">
                    <Card>
                        <CardBody>
                            {showErrorAlert &&
                                <Alert className="text-center" style={{ backgroundColor: "#FFE8E9", borderRadius: "5px", color: "#CC3333" }}>
                                    Υπάρχει ήδη λογαριασμός με αυτό το email. Παρακαλώ{" "}
                                    <Link to="/login" style={{ color: "#CC3333", }}><u>συνδεθείτε.</u></Link>
                                </Alert>
                            }
                            {showLoader &&
                                <div className="text-center" style={{width:"100%"}}>
                                    <ClipLoader size={25} color={"#123abc"}/> 
                                </div>                         
                            }
                            {showSuccessAlert &&
                                <Alert theme="success" className="text-center" style={{borderRadius: "5px", color: "white" }}>
                                    Ο λογαριασμός δημιουργήθηκε με επιτυχία. Παρακαλώ{" "}
                                    <Link to="/login" style={{ color: "white", }}><u>συνδεθείτε.</u></Link>
                                </Alert>
                            }
                            {showGeneralErrorAlert &&
                                <Alert className="text-center" style={{ backgroundColor: "#FFE8E9", borderRadius: "5px", color: "#CC3333" }}>
                                    {generalError}
                                </Alert>
                            }
                            <CardTitle tag="h2" className="text-center">
                                <span>Εγγραφή</span>
                            </CardTitle>
                            <CardSubtitle className="mt-sm-2 mt-2 text-center">
                                Παρακαλώ συμπληρώστε τα παρακάτω πεδία
                            </CardSubtitle>
                            <Form className="mt-sm-3 mt-3">
                                <Row>
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#name" 
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                    Όνομα *
                                            </label>
                                            <FormInput onChange={(e) => setName(e.target.value)} placeholder="π.χ. Δημήτρης" type="text" id="#name" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#surname"
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                Επώνυμο *
                                            </label>
                                            <FormInput onChange={(e) => setSurname(e.target.value)} placeholder="π.χ. Δημητριάδης" type="text" id="#surname" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="pt-2 pt-sm-2">
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#email"
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                Email *
                                            </label>
                                            <FormInput onChange={(e) => setEmail(e.target.value)} placeholder="π.χ. semantic@gmail.com" type="email" id="#email" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#afm"
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                Α.Φ.Μ. *
                                            </label>
                                            <FormInput onChange={(e) => setAfm(e.target.value)} placeholder="π.χ. 074697711" type="text" id="#afm" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="pt-2 pt-sm-2">
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#password1"
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                Κωδικός *
                                            </label>
                                            <FormInput onChange={(e) => setPassword1(e.target.value)} placeholder="Τουλάχιστον 8 χαρακτήρες" type="password" id="#password1" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6" sm="12">
                                        <FormGroup>
                                            <label
                                                htmlFor="#password2"
                                                style={{ fontSize: "22px", cursor: "default" }}>
                                                Επανάληψη Κωδικού *
                                            </label>
                                            <FormInput onChange={(e) => setPassword2(e.target.value)} placeholder="επαναλάβετε τον κωδικό σας" type="password" id="#password2" style={{ fontWeight: "normal" }}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="mt-sm-2 mt-2 ">
                                    <Col md="2" sm="0"></Col>
                                    <Col md="8" sm="10">
                                        <Button pill block size="lg"
                                            onClick={handleSave}
                                        >
                                            Εγγραφή
                                        </Button>
                                    </Col>
                                    <Col md="2" sm="0"></Col>
                                </Row>
                                <Row>
                                    <Col md="12" sm="12">
                                        <span style={{fontWeight:"lighter"}}>* Υποχρεωτικό Πεδίο</span>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row
                                    style={{ width: "100%" }}
                                    className="text-center"
                                >
                                    <Col md="1" sm="0"></Col>
                                    <Col md="10" sm="10">
                                        <div style={{ marginTop: "1%" }}>
                                            <Link to="/login">
                                                <u>
                                                    Είστε ήδη εγγεγραμμένος;
                                                    Είσοδος.
                                                </u>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col md="1" sm="0"></Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="0"></Col>
            </Row>
        </Container>
    );
}

export default WithoutAuth(Register)