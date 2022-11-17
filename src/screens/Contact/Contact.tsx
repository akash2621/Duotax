import "./Contact.css";
import { Layout } from 'antd';
import { Breadcrumb , Row , Col , Form } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Header from "../../components/Layout/Header/Header";

const Contact = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Contact</h3>
                    </div>
                    <Row>
                        <Col xl={6} lg={7} >
                            <div className="form_main">
                                <div className="card">
                                    <h4>How can we help?</h4>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your subject" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enquiry</Form.Label>
                                            <Form.Control as="textarea" rows={5} cols={50} />
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

export default Contact;