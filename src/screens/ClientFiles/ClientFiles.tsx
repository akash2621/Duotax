// 15 Nov change Start
import "./ClientFiles.css";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Layout } from 'antd';
import Header from "../../components/Layout/Header/Header";
import { Breadcrumb , Row , Col , Table , Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClientFiles = () =>{
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
                            <Breadcrumb.Item>John Doe</Breadcrumb.Item>
                            <Breadcrumb.Item active>123456-Sydney</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>34A/11-21 Underwood Road Homebush NSW 2140</h3>
                    </div>
                    <div className="outstanding_main client_list_main">
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Files</th>
                                        <th>Download</th>
                                        <th>Other Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>DT-Report 123456.pdf</b></Link></td>
                                        <td><Link to="/clients/detail/files" >Download</Link></td>
                                        <td className="enquiry_modal" >
                                            <Link to="/clients/detail/files" >. Enquire about file</Link>
                                            <Link to="/clients/detail/files" >. Email file to my inbox</Link>
                                            <Link to="/clients/detail/files" >. Email file to client</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/clients/detail/files" ><b>DT-Report 123456.pdf</b></Link></td>
                                        <td><Link to="/clients/detail/files" >Download</Link></td>
                                        <td className="enquiry_modal" >
                                            <Link to="/clients/detail/files" >. Enquire about file</Link>
                                            <Link to="/clients/detail/files" >. Email file to my inbox</Link>
                                            <Link to="/clients/detail/files" >. Email file to client</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to="/clients/detail/files" className="missing_property" >Missing property or report? click ehre to request</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default ClientFiles;
// 15 Nov change End