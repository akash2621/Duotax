import { Row , Col , Container , Form } from "react-bootstrap";

const EnquiryTax = () =>{
    return(
        <>
            <div className="form_common mb-0">
                <div className="form_step_title">
                    <h5>3</h5>
                    <h6>Enter your contact details</h6>
                </div>
                <div className="form_type form_main">
                    <Form>
                        <Row>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your email" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your mobile no." />
                                </Form.Group>
                            </Col>
                            <Col lg={12} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Investment property address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter investment property address" />
                                </Form.Group>
                            </Col>
                            <Col lg={12} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>How we can help?</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Enter message" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
            <button className="orange_btn mt-3">Submit</button>
        </>
    );
}

export default EnquiryTax;