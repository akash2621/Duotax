import "./Updatedetails.css";
import { Layout } from 'antd';
import { Breadcrumb , Row , Col , Form } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Header from "../../components/Layout/Header/Header";

const Updatedetails = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Update my details</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Update my details</h3>
                    </div>
                    <Row>
                        <Col xl={6} lg={7} >
                            <div className="form_main">
                                <div className="card">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your first name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your last name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mailing street</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your mailing street" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mailing city</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your mailing city" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mailing state</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your mailing state" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Mailing post code</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your mailing post code" />
                                        </Form.Group>
                                        <button className="orange_btn mt-3 small_btn_width" >Submit</button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Layout>
        </>
    );
}

export default Updatedetails;