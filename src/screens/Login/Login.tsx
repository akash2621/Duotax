/* 10 Nov Change Start */
import { Col, Form, Row } from "react-bootstrap";
import "./Login.css";
import sydney from "../../assets/image/Quantity-Surveyor-Sydney.jpg";
import logo from "../../assets/image/logo.svg";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <>
            <div className="page_wrapper">
                <Row>
                    <Col xl={{ order: "first" , span: 6 }} lg={{ order: "last" , span: 12 }} md={{ order: "last" , span: 12 }} sm={{ order: "last" , span: 12 }} xs={{ order: "last" , span: 12 }}  >
                        <div className="login_image">
                            <img src={sydney} alt="login" />
                        </div>
                    </Col>
                    <Col xl={{ order: "last" , span: 6 }} lg={{ order: "first" , span: 12 }} md={{ order: "first" , span: 12 }} sm={{ order: "first" , span: 12 }} xs={{ order: "first" , span: 12 }} >
                        <Row>
                            <Col lg={10} >
                                <div className="login_content">
                                    <img src={logo} alt="logo" />
                                    <h2>Welcome to the Duo Tax Portal</h2>
                                    <p>Please enter your username and password to login.</p>
                                    <div className="form_main">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email / Username</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email/username" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter password" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <Link to="/" className="orange_btn mt-3" >Login</Link>
                                    <Link to="/forgot" >For your password? click here to recover.</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Login;
/* 10 Nov Change End */