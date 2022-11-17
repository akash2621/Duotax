import "./AddUser.css";
import { Layout } from 'antd';
import { Breadcrumb , Row , Col , Form } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Header from "../../components/Layout/Header/Header";

const AddUser = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Add another user</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Add another user</h3>
                    </div>
                    <Row>
                        {/* 17 Nov Change Start */}
                        <Col xl={6} lg={7} >
                        {/* 17 Nov Change End */}
                            <div className="form_main adduser_main">
                                <div className="card">
                                    <h4>Fill in the form below to activate their account</h4>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your first name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your last name" />
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

export default AddUser;