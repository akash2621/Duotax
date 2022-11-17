import "./BankDetails.css";
import { Layout } from 'antd';
import { Breadcrumb , Row , Col , Form } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Header from "../../components/Layout/Header/Header";

const BankDetails = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Bank details</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Bank details</h3>
                    </div>
                    <Row>
                        {/* 17 Nov Change End */}
                        <Col xl={6} lg={7} >
                        {/* 17 Nov Change End */}
                            <div className="form_main">
                                <div className="card">
                                    <h4>Please make sure your details are up-to-date for commission payments.</h4>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Account name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your account name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>BSB</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your BSB" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Account number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter account number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>ABN</Form.Label>
                                            <Form.Control type="text" placeholder="Enter ABN" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>GST</Form.Label>
                                            <div className="gst_checkbox" >
                                                <input type="checkbox" id="gst" />
                                                <label htmlFor="gst" >Registered for GST</label>
                                            </div>
                                            <div className="gst_checkbox" >
                                                <input type="checkbox" id="gst" />
                                                <label htmlFor="gst" >Not registered for GST</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Send tax invoice to:</Form.Label>
                                            <Form.Control type="text" placeholder="Enter tax invoice no." />
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

export default BankDetails;