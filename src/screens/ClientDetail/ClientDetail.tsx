// 15 Nov change Start
import "./ClientDetail.css";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Layout } from 'antd';
import Header from "../../components/Layout/Header/Header";
import { Breadcrumb , Row , Col , Table , Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import download from "../../assets/image/download.svg";
import edit from "../../assets/image/edit.svg";
import email from "../../assets/image/email.svg";

const ClientDetail = () =>{
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
                            <Breadcrumb.Item>Clients</Breadcrumb.Item>
                            <Breadcrumb.Item active>John Doe</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>John Doe</h3>
                    </div>
                    <div className="outstanding_main client_list_main">
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Referance</th>
                                        <th>Investment Property Address</th>
                                        <th>Type</th>
                                        <th>Stage</th>
                                        <th>Date</th>
                                        <th>Files</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>123456</b></Link></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Job Complete</td>
                                        <td>01/03/22</td>
                                        <td><Link to="/clients/detail/files" ><b>View</b></Link></td>
                                        <td>
                                            <img src={download} alt="download" />
                                            <img src={email} alt="email" />
                                            <img src={edit} alt="edit" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>123456</b></Link></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Job Complete</td>
                                        <td>01/03/22</td>
                                        <td><Link to="/clients/detail/files" ><b>View</b></Link></td>
                                        <td>
                                            <img src={download} alt="download" />
                                            <img src={email} alt="email" />
                                            <img src={edit} alt="edit" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>123456</b></Link></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Job Complete</td>
                                        <td>01/03/22</td>
                                        <td><Link to="/clients/detail/files" ><b>View</b></Link></td>
                                        <td>
                                            <img src={download} alt="download" />
                                            <img src={email} alt="email" />
                                            <img src={edit} alt="edit" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>123456</b></Link></td>
                                        <td>34A/11-21 Underwood Road Homebush NSW 2140</td>
                                        <td>Tax Depreciation Schedule</td>
                                        <td>Job Complete</td>
                                        <td>01/03/22</td>
                                        <td><Link to="/clients/detail/files" ><b>View</b></Link></td>
                                        <td>
                                            <img src={download} alt="download" />
                                            <img src={email} alt="email" />
                                            <img src={edit} alt="edit" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to="" className="missing_property" >Missing property or report? click ehre to request</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default ClientDetail;
// 15 Nov change End