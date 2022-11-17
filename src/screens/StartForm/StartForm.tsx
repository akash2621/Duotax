import "./StartForm.css";
import { Row , Col , Container , Form } from "react-bootstrap";
import logo from "../../assets/image/logo.svg";
import { useState } from "react";
import OrderTax from "./OrderTax";
import OrderProperty from "./OrderProperty";
import EnquiryTax from "./EnquiryTax";

const StartForm = () =>{
    const [formType, setFormType] = useState(1);
    const [reportType, setReportType] = useState(3);
    console.log("formType : ", formType);
    console.log("reportType : ", reportType);

    return(
        <>
            <div className="startform_main">
                <Container fluid >
                    <Row className="justify-content-center" >
                        <Col xl={11} lg={12} >
                            <Row>
                                <Col xl={{ order: "first" , span: 6 }} lg={{ order: "last" , span: 12 }} md={{ order: "last" , span: 12 }} sm={{ order: "last" , span: 12 }} xs={{ order: "last" , span: 12 }} >
                                    <div className="card">
                                        <div className="form_common">
                                            <div className="form_step_title">
                                                <h5>1</h5>
                                                <h6>Select form</h6>
                                            </div>
                                            <div className="form_type">
                                                <div className="form_select" >
                                                    <input type="radio" id="test1" name="form_select" onChange={()=>{setFormType(1)}} />
                                                    <label htmlFor="test1" >Order a report</label>
                                                </div>
                                                <div className="form_select" >
                                                    <input type="radio" id="test2" name="form_select" onChange={()=>{setFormType(2)}}  />
                                                    <label htmlFor="test2">Make an enquiry</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_common">
                                            <div className="form_step_title">
                                                <h5>2</h5>
                                                <h6>Choose your report type</h6>
                                            </div>
                                            <div className="form_type">
                                                <div className="form_select" >
                                                    <input type="radio" id="test3" onChange={()=>setReportType(3)} name="report_type" />
                                                    <label htmlFor="test3">Tax depreciation</label>
                                                </div>
                                                <div className="form_select" >
                                                    <input type="radio" id="test4" onChange={()=>setReportType(4)} name="report_type" />
                                                    <label htmlFor="test4">Property valuation</label>
                                                </div>
                                            </div>
                                        </div>
                                        {formType === 1 && reportType === 3 && <OrderTax /> }
                                        {formType === 1 && reportType === 4 && <OrderProperty /> }
                                        {formType === 2 && reportType === 3 && <EnquiryTax /> }
                                        {formType === 2 && reportType === 4 && <EnquiryTax /> }
                                    </div>
                                </Col>
                                <Col xl={{ order: "last" , span: 6 }} lg={{ order: "first" , span: 12 }} md={{ order: "first" , span: 12 }} sm={{ order: "first" , span: 12 }} xs={{ order: "first" , span: 12 }} >
                                    {formType === 1 && reportType === 3 &&
                                        <>
                                            <div className="form_content">
                                                <img src={logo} alt="logo" />
                                                <h5>Maximise your tax <br /> refund with Duo Tax</h5>
                                                <h6>Duo Tax have collaborated with to maximise your tax depreciation claim. The reduced fee starts from $599 inc. GST (RRP $700).*</h6>
                                                <p>* For residential properties only. Additional dwellings will require an additional charge.
                                                Should you own a commercial building, a quote will be provided after we have reviewed the property.</p>
                                                <h4>The process:</h4>
                                                <ul>
                                                    <li><span>1</span>Fill out the form</li>
                                                    <li><span>2</span>One of our surveyors will get in touch with you shortly</li>
                                                </ul>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/d34yhVaTfGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                <div className="start_info">
                                                    <p>Duo Tax Quantity Surveyors are Australia’s Highest-Rated
                                                    Quantity Surveyors for Property Tax Depreciation.</p>
                                                    <p>Depreciation is one of the biggest tax deductions available to property investors and has the potential to boost your cash return by thousands. <a>Click here</a> to learn more about tax depreciation.</p>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {formType === 1 && reportType === 4 &&
                                        <>
                                            <div className="form_content">
                                                <img src={logo} alt="logo" />
                                                <h5>Fast, Reliable & Affordable Property <br /> Valuation Services Australia Wide</h5>
                                                <h6>In collaboration with Hibbard Accounting, our property valuation fee starts from $550 inc GST.</h6>
                                                <h4>The process:</h4>
                                                <ul>
                                                    <li><span>1</span>Fill out the form</li>
                                                    <li><span>2</span>One of our surveyors will get in touch with you shortly</li>
                                                    <li><span>3</span>We will provide you with a quote before proceeding with the report</li>
                                                </ul>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/BhYWNyMW46E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </>
                                    }
                                    {formType === 2 && reportType === 3 &&
                                        <>
                                            <div className="form_content">
                                                <img src={logo} alt="logo" />
                                                <h5>Maximise your tax <br /> refund with Duo Tax</h5>
                                                <h6>Duo Tax have collaborated with to maximise your tax depreciation claim. The reduced fee starts from $599 inc. GST (RRP $700).*</h6>
                                                <p>* For residential properties only. Additional dwellings will require an additional charge.
                                                Should you own a commercial building, a quote will be provided after we have reviewed the property.</p>
                                                <h4>The process:</h4>
                                                <ul>
                                                    <li><span>1</span>Fill out the form</li>
                                                    <li><span>2</span>One of our surveyors will get in touch with you shortly</li>
                                                </ul>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/d34yhVaTfGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                <div className="start_info">
                                                    <p>Duo Tax Quantity Surveyors are Australia’s Highest-Rated
                                                    Quantity Surveyors for Property Tax Depreciation.</p>
                                                    <p>Depreciation is one of the biggest tax deductions available to property investors and has the potential to boost your cash return by thousands. <a>Click here</a> to learn more about tax depreciation.</p>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {formType === 2 && reportType === 4 &&
                                        <>
                                            <div className="form_content">
                                                <img src={logo} alt="logo" />
                                                <h5>Fast, Reliable & Affordable Property <br /> Valuation Services Australia Wide</h5>
                                                <h6>In collaboration with Hibbard Accounting, our property valuation fee starts from $550 inc GST.</h6>
                                                <h4>The process:</h4>
                                                <ul>
                                                    <li><span>1</span>Fill out the form</li>
                                                    <li><span>2</span>One of our surveyors will get in touch with you shortly</li>
                                                </ul>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/BhYWNyMW46E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </>
                                    }
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default StartForm;