// 15 Nov change Start
import "./ClientList.css";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Layout } from 'antd';
import Header from "../../components/Layout/Header/Header";
import { Breadcrumb , Row , Col , Table , Modal } from "react-bootstrap";
import edit from "../../assets/image/edit.svg";
import { Link } from "react-router-dom";

const ClientList = () =>{
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
                            <Breadcrumb.Item active>Clients</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Clients</h3>
                    </div>
                    <div className="outstanding_main client_list_main">
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Reports</th>
                                        <th>Email</th>
                                        <th>Last Engagement Date</th>
                                        <th>Referrer</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/clients/detail" ><b>John Doe</b></Link></td>
                                        <td>7 Properties</td>
                                        <td>brad@duotax.com.au</td>
                                        <td>01/03/22</td>
                                        <td>Keyur Maniya</td>
                                        <td><img src={edit} alt="edit" /></td>
                                    </tr>
                                    <tr>
                                        <td><b>John Doe</b></td>
                                        <td>7 Properties</td>
                                        <td>brad@duotax.com.au</td>
                                        <td>01/03/22</td>
                                        <td>Keyur Maniya</td>
                                        <td><img src={edit} alt="edit" /></td>
                                    </tr>
                                    <tr>
                                        <td><b>John Doe</b></td>
                                        <td>7 Properties</td>
                                        <td>brad@duotax.com.au</td>
                                        <td>01/03/22</td>
                                        <td>Keyur Maniya</td>
                                        <td><img src={edit} alt="edit" /></td>
                                    </tr>
                                    <tr>
                                        <td><b>John Doe</b></td>
                                        <td>7 Properties</td>
                                        <td>brad@duotax.com.au</td>
                                        <td>01/03/22</td>
                                        <td>Keyur Maniya</td>
                                        <td><img src={edit} alt="edit" /></td>
                                    </tr>
                                    <tr>
                                        <td><b>John Doe</b></td>
                                        <td>7 Properties</td>
                                        <td>brad@duotax.com.au</td>
                                        <td>01/03/22</td>
                                        <td>Keyur Maniya</td>
                                        <td><img src={edit} alt="edit" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default ClientList;
// 15 Nov change End