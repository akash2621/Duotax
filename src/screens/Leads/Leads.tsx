/* 10 Nov Change Start */

/* 11 Nov Change Start */
import React, { useState } from 'react';
import RequestEdit from './RequestEdit';
/* 11 Nov Change End */

import "./Leads.css";
import { Layout } from 'antd';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from "../../components/Layout/Header/Header";

/* 11 Nov Change Start */
import { Breadcrumb , Row , Col , Table , Modal } from "react-bootstrap";
/* 11 Nov Change End */

import email from "../../assets/image/email.svg";

const Leads = () =>{

    /* 11 Nov Change Start */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* 11 Nov Change End */

    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item>My clients</Breadcrumb.Item>
                            <Breadcrumb.Item active>Leads</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Leads</h3>
                    </div>
                    <div className="outstanding_main">
                        <h5>Pending Clients</h5>
                        <h6>(In Progress)</h6>
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Client</th>
                                        <th>Address</th>
                                        <th>Report type</th>
                                        <th>Report fee</th>
                                        <th>Date</th>
                                        <th>Enquiry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Brad Hibbard</b></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>$ 550</td>
                                        <td>12/05/2022</td>
                                        {/* 11 Nov Change Start */}
                                        <td onClick={handleShow} >
                                            <img src={email} alt="email" />
                                        </td>
                                        {/* 11 Nov Change End */}
                                    </tr>
                                    <tr>
                                        <td><b>Brad Hibbard</b></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>$ 550</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="outstanding_main">
                        <h5>Client's Not Proceeding</h5>
                        <h6>(Client did not proceed)</h6>
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Client</th>
                                        <th>Address</th>
                                        <th>Report type</th>
                                        <th>Status</th>
                                        <th>Reason</th>
                                        <th>Date</th>
                                        <th>Enquiry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Brad Hibbard</b></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Did not proceed</td>
                                        <td>Property was not purchased</td>
                                        <td>12/05/22</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>Brad Hibbard</b></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Did not proceed</td>
                                        <td>Property was not purchased</td>
                                        <td>12/05/22</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Layout>

            {/* 11 Nov Change Start */}
            <Modal show={show} onHide={handleClose} className="edit_request" >
                <Modal.Header closeButton>
                    <Modal.Title>Request an edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RequestEdit />
                </Modal.Body>
                <Modal.Footer>
                    <button className='orange_btn light_orange_btn' onClick={handleClose}>
                        Close
                    </button>
                    <button className='orange_btn' onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
            {/* 11 Nov Change End */}
        </>
    );
}

export default Leads;
/* 10 Nov Change End */