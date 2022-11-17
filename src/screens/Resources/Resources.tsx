import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Layout } from 'antd';
import Header from "../../components/Layout/Header/Header";
import { Breadcrumb , Row , Col , Table } from "react-bootstrap";
import "./Resources.css";

const Resources = () =>{
    return(
        <>
            <Sidebar />
            <Layout>
                <Header />
                <div className="main_content">
                    <div className="page_titles">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Resources</Breadcrumb.Item>
                        </Breadcrumb>
                        <h3>Resources</h3>
                    </div>
                    {/* 10 Nov Change Start  */}
                    <div className="resources_main">
                        <iframe src="https://duotax.com.au/partners/resources/" name="preview-frame" frameBorder="0" data-view="fullScreenPreview" allow="geolocation 'self'; autoplay 'self'" ></iframe>
                    </div>
                    {/* 10 Nov Change End  */}
                </div>
            </Layout>
        </>
    );
}

export default Resources;