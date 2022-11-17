import { Layout } from 'antd';
import "./MyClients.css";
import { Breadcrumb , Row , Col } from "react-bootstrap";
import user from "../../assets/image/user.svg";
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from '../../components/Layout/Header/Header';
import { Link } from 'react-router-dom';

const MyClients = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>My clients</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>My clients</h3>
                    </div>
                    <Row>
                        <Col xl={4} lg={6} >
                            <div className="clients_list">
                                <div className="card clients_detail">
                                    <img src={user} alt="user" />
                                    <h5>Leads</h5>
                                    <p>Leads are clients you have referred but have not yet proceeded with ordering the report.</p>
                                    <Link to="/clients/leads" className="orange_btn" >View leads</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={6} >
                            <div className="clients_list">
                                <div className="card clients_detail">
                                    <img src={user} alt="user" />
                                    <h5>Clients</h5>
                                    <p>Clients you have referred, including both reports in progress and completed.</p>
                                    {/* 15 Nov change Start */}
                                    <Link to="/clients/clients" className="orange_btn" >View clients</Link>
                                    {/* 15 Nov change End */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Layout>
        </>
    );
}

export default MyClients;