import "./Commissions.css";
import { Layout } from 'antd';
import { Breadcrumb , Row , Col , Table } from "react-bootstrap";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Header from "../../components/Layout/Header/Header";
import download from "../../assets/image/download.svg";
import edit from "../../assets/image/edit.svg";
import email from "../../assets/image/email.svg";
import { Link } from "react-router-dom";

const Commissions = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Commissions</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Commissions</h3>
                    </div>
                    {/* <Row>
                        <Col xl={4} lg={6} >
                            <div className="clients_list">
                                <div className="card">
                                    <h5>Paid</h5>
                                    <p>2 Commissions</p>
                                    <button className="orange_btn" >Select</button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={6} >
                            <div className="clients_list">
                                <div className="card">
                                    <h5>Outstanding</h5>
                                    <p>6 Commissions</p>
                                    <button className="orange_btn" >Select</button>
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                    {/* 10 Nov Change Start  */}
                    <div className="outstanding_main">
                        <h5>Outstanding</h5>
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Referance</th>
                                        <th>Client</th>
                                        <th>Commission</th>
                                        <th>To Be Paid To</th>
                                        <th>Status</th>
                                        <th>Order date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>123456A</b></td>
                                        <td><Link to="" >John doe</Link></td>
                                        <td>$ 50</td>
                                        <td>---</td>
                                        <td>Awaiting Bank Details</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456A</b></td>
                                        <td><Link to="" >John doe</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Awaiting Bank Details</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456A</b></td>
                                        <td><Link to="" >John doe</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Awaiting Bank Details</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456A</b></td>
                                        <td><Link to="" >John doe</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Awaiting Bank Details</td>
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
                        <h5>Paid</h5>
                        <div className="report_table">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Referance</th>
                                        <th>Client</th>
                                        <th>Commission</th>
                                        <th>Paid to</th>
                                        <th>Status</th>
                                        <th>Payment date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>123456</b></td>
                                        <td><Link to="" >Brad Hibbard</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Paid</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456</b></td>
                                        <td><Link to="" >Brad Hibbard</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Paid</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456</b></td>
                                        <td><Link to="" >Brad Hibbard</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Paid</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>123456</b></td>
                                        <td><Link to="" >Brad Hibbard</Link></td>
                                        <td>$ 50</td>
                                        <td>Acc ending in 812</td>
                                        <td>Paid</td>
                                        <td>12/05/2022</td>
                                        <td>
                                            <img src={email} alt="email" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    {/* 10 Nov Change End  */}
                </div>
            </Layout>
        </>
    );
}

export default Commissions;