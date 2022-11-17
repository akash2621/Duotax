import { Layout } from 'antd';
import "./Reports.css";
// 15 Nov change Start
import { Breadcrumb , Row , Col , Table , Dropdown } from "react-bootstrap";
// 15 Nov change End
import download from "../../assets/image/download.svg";
import edit from "../../assets/image/edit.svg";
import email from "../../assets/image/email.svg";
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from '../../components/Layout/Header/Header';
// 15 Nov change Start
import { Link } from "react-router-dom";
// 15 Nov change End

const Reports = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Reports & schedules</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Reports & schedules</h3>
                    </div>
                    <div className="filter_table">
                        <span>Filter :</span>
                        <div className="form-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html">Property valuation</label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="css" />
                            <label htmlFor="css">Property valuation</label>
                        </div>
                    </div>
                    <div className="report_table">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Address</th>
                                    <th>Report type</th>
                                    <th>Referrer</th>
                                    <th>Referance</th>
                                    <th>Order date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Brad Hibbard</b></td>
                                    <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>John Smith</b></td>
                                    <td>139 Cooriengah Heights Rd Engadine NSW 2233</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>James Brian</b></td>
                                    <td>1102/288 Bold Street Silverwater NSW 2207</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Samuel Jones</b></td>
                                    <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Brad Hibbard</b></td>
                                    <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Brad Hibbard</b></td>
                                    <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                    <td>Tax Depreciation Schedule</td>
                                    <td>Brad Hibbard</td>
                                    <td>123456</td>
                                    <td>12/05/2022</td>
                                    <td>
                                        {/* 15 Nov change Start */}
                                        <Dropdown className='report_action' >
                                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Send file to my inbox</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Send file to the client</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* 15 Nov change End */}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        {/* 15 Nov change Start */}
                        <Link to="" className="missing_property" >Missing Files? Request here</Link>
                        {/* 15 Nov change End */}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Reports;