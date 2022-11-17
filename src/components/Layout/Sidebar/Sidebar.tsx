import "./Sidebar.css";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.svg";
// 17 Nov Start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faUser , faFile , faDollar , faPen , faImage , faEnvelope , faUserPlus , faSquarePlus , faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// 17 Nov End

const { Sider } = Layout;

const Sidebar = () =>{
    return(
        <>
            <Sider
                breakpoint="xl"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                className="sidebar_main"
            >
                <img src={logo} alt="logo" className="sidebar_logo" />
                {/* 17 Nov change End */}
                <Menu mode="inline" >
                    <div className="sidebarmenu_main">
                        <div>
                            {/* 17 Nov Start */}
                            <Menu.Item key="1" className="client_refer" ><Link to="/startform" ><FontAwesomeIcon icon={faSquarePlus} />Refer a client</Link></Menu.Item>
                            <Menu.Item key="2" ><Link to="/" ><FontAwesomeIcon icon={faHouse} />Home</Link></Menu.Item>
                            <Menu.Item key="3" ><Link to="/clients" ><FontAwesomeIcon icon={faUser} />My clients</Link></Menu.Item>
                            <Menu.Item key="4" ><Link to="/reports" ><FontAwesomeIcon icon={faFile} />Reports & schedules</Link></Menu.Item>
                            <Menu.Item key="5" ><Link to="/commissions" ><FontAwesomeIcon icon={faDollar} />Commissions</Link></Menu.Item>
                            <Menu.Item key="6" ><Link to="/bankdetails" ><FontAwesomeIcon icon={faPen} />Update bank details</Link></Menu.Item>
                            <Menu.Item key="7" ><Link to="/resources" ><FontAwesomeIcon icon={faImage} />Resources</Link></Menu.Item>
                            <Menu.Item key="8" ><Link to="/contact" ><FontAwesomeIcon icon={faEnvelope} />Contact andy</Link></Menu.Item>
                            <Menu.Item key="9" ><Link to="/updatedetails" ><FontAwesomeIcon icon={faPen} />Update my details</Link></Menu.Item>
                            <Menu.Item key="10" ><Link to="/adduser" ><FontAwesomeIcon icon={faUserPlus} />Add user</Link></Menu.Item>
                            {/* 17 Nov End */}
                        </div>
                        <div>
                            <Menu.Item key="11" ><Link to="/login" ><FontAwesomeIcon icon={faArrowRightFromBracket} />Log out</Link></Menu.Item>
                        </div>
                    </div>
                </Menu>
                {/* 17 Nov change End */}
            </Sider>
        </>
    );
}

export default Sidebar;