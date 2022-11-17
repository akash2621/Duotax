import { Layout } from 'antd';
import Header from '../../components/Layout/Header/Header';
import "./Dashboard.css";
import { Row , Col } from "react-bootstrap";
import user from "../../assets/image/user1.png";
import copy from "../../assets/image/copy.svg"; 
import clients from "../../assets/image/my-clients.jpg";
import reports from "../../assets/image/reports-schedules.png";
import commissions from "../../assets/image/commissions.png";
import refer from "../../assets/image/refer-a-client.svg";
import resources from "../../assets/image/resources.png";
import bank from "../../assets/image/update-bank-details.png";
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Dashboard = () =>{
    return(
        <> 
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="dashboard_title">
                        <p>Welcome,</p>
                        <h5>Brad hibbard</h5>
                        <h6>Hibbard Accounting</h6>
                    </div>
                    <Row>
                        <Col lg={4} >
                            <div className="card common_card_dashboard">
                                <div className="relation_main">
                                    <h5>Your relationship manager</h5>
                                    <div className="relation_content">
                                        <h6><img src={user} alt="user" />Andy tran</h6>
                                        <p>Andy is your dedicated relationship manager to help out your clients. Please feel free to reach out anytime.</p>
                                        <div className="phone_numbar">
                                            <h6>0466 823 499</h6>
                                            <img src={copy} alt="copy" />
                                        </div>
                                        <div className="phone_numbar">
                                            <h6>andy@duotax.com.au</h6>
                                            <img src={copy} alt="copy" />
                                        </div>
                                        <Link to="/contact" className="orange_btn" >Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <Link to="/clients" className="card common_card_dashboard">
                                <div className="relation_main clients_main">
                                    <div className="clients_title">
                                        <h5>My clients</h5>
                                        <p>View all your clients. See their report progress along with schedules and invoices.</p>
                                    </div>
                                    <img src={clients} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/reports" className="card common_card_dashboard">
                                <div className="relation_main clients_main">
                                    <div className="clients_title">
                                        <h5>Reports & schedules</h5>
                                        <p>Download your clients reports, schedules and invoices.</p>
                                    </div>
                                    <img src={reports} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/commissions" className="card common_card_dashboard">
                                <div className="relation_main clients_main">
                                    <div className="clients_title">
                                        <h5>Commissions</h5>
                                        <p>View all your paid and pending commission.</p>
                                    </div>
                                    <img src={commissions} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/startform" className="card common_card_dashboard">
                                <div className="relation_main refer_client">
                                    <div className="clients_title">
                                        <h5>Refer a client</h5>
                                        <p>Do you have a client to refer? Click here.</p>
                                    </div>
                                    <img src={refer} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/resources" className="card common_card_dashboard">
                                <div className="relation_main clients_main">
                                    <div className="clients_title">
                                        <h5>Resources</h5>
                                        <p>Download sample reports, read our latest articles and get resources for your clients.</p>
                                    </div>
                                    <img src={resources} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/bankdetails" className="card common_card_dashboard">
                                <div className="relation_main refer_client">
                                    <div className="clients_title">
                                        <h5>Update my bank details</h5>
                                        <p>Click here to update your personal details.</p>
                                    </div>
                                    <img src={bank} alt="clients" />
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/updatedetails" className="card common_card_dashboard">
                                <div className="relation_main refer_client">
                                    <div className="clients_title">
                                        <h5>Update my details</h5>
                                        <p>Have you changed your bank details? update them here.</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4} >
                            <Link to="/adduser" className="card common_card_dashboard">
                                <div className="relation_main refer_client">
                                    <div className="clients_title">
                                        <h5>Add a user</h5>
                                        <p>Click here to give your staff access to the portal.</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Layout>  
        </>
    );
}

export default Dashboard;