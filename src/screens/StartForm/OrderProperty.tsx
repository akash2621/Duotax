import { Row , Col , Container , Form } from "react-bootstrap";

const OrderProperty = () =>{
    return(
        <>
            <div className="form_common">
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
                        </Row>
                    </Form>
                </div>
            </div>
            <div className="form_common">
                <div className="form_step_title">
                    <h5>4</h5>
                    <h6>Enter the investment property address</h6>
                </div>
                <div className="form_type form_main">
                    <Form>
                        <Row>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Property Type *</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>--None--</option>
                                        <option value="1">Apartment</option>
                                        <option value="2">House</option>
                                        <option value="3">Grannyflat</option>
                                        <option value="4">Townhouse</option>
                                        <option value="5">Studio</option>
                                        <option value="6">Duplex(Side 1)</option>
                                        <option value="7">Duplex(Side 2)</option>
                                        <option value="8">Duplex(Both sides)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Valuation Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>--None--</option>
                                        <option value="1">Stamp duty</option>
                                        <option value="2">Capital gains</option>
                                        <option value="3">market assessment</option>
                                        <option value="4">pre-purchase</option>
                                        <option value="5">pre-sale</option>
                                        <option value="6">retrospective</option>
                                        <option value="7">land tax assessment</option>
                                        <option value="8">land objection</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Street No. & Address *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your street no. & address" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Suburb*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your suburb" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>State*</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>--None--</option>
                                        <option value="1">ACT</option>
                                        <option value="2">NSW</option>
                                        <option value="3">NT</option>
                                        <option value="4">QLD</option>
                                        <option value="5">SA</option>
                                        <option value="6">TAS</option>
                                        <option value="7">VIC</option>
                                        <option value="8">WA</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Postcode*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your postcode" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Settlement Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date of Valuation</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Purchase Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your postcode" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Construction Cost (if available)</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your cost" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Cons. Completion Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Estimated Market Value</Form.Label>
                                    <Form.Control type="text" placeholder="Enter market value" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Requested Valuation Target</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>--None--</option>
                                        <option value="1">Fiar</option>
                                        <option value="2">High</option>
                                        <option value="3">Low</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Valuation Notes</Form.Label>
                                    <Form.Control type="text" placeholder="Enter valuation notes" />
                                </Form.Group>
                            </Col>
                            <a href="#" className="add_addtional" >+ Add additional dwelling (granny flat, duplex, dual key residential)</a>
                        </Row>
                    </Form>
                </div>
            </div>
            <div className="form_common">
                <div className="form_step_title">
                    <h5>5</h5>
                    <h6>Enter Ownership details</h6>
                </div>
                <div className="form_type form_main">
                    <p className="owner_subtitle" >Please provide names of the owners below. If it is a company or trust, please place in the first name field.</p>
                    <Form>
                        <Row>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Owner 1 First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Owner 1 Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Owner 2 First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Owner 2 Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <a className="add_addtional" >+ Add owner</a>
                </div>
            </div>
            <div className="form_common mb-0">
                <div className="form_step_title">
                    <h5>6</h5>
                    <h6>Property Manager</h6>
                </div>
                <div className="form_type form_main">
                    <p className="owner_subtitle" >We may require access to the property, please provide property management details.<br />
                    If you are privately managing this property please provide tenants contact number.<br />
                    If the property is vacant or you prefer us not to inspect the property (to speed up delivery of your report), please leave this section blank.</p>
                    <Form>
                        <Row>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Property Management Company</Form.Label>
                                    <Form.Control type="text" placeholder="Enter management company name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Property Managers Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter managers name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Property Managers Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter managers email" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Property Managers Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter managers number" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tenants Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tenants name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tenants contact number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tenants contact no." />
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

export default OrderProperty;