import "./Sidebar.css";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.svg";
import refer from "../../../assets/image/sidebar/Refer.svg";
import home from "../../../assets/image/sidebar/Home.svg";
import user from "../../../assets/image/sidebar/User.svg";
import report from "../../../assets/image/sidebar/Report.svg";
import commission from "../../../assets/image/sidebar/Commissions.svg";
import edit from "../../../assets/image/sidebar/Edit.svg";
import resource from "../../../assets/image/sidebar/Resources.svg";
import contact from "../../../assets/image/sidebar/Contacts.svg";
import adduser from "../../../assets/image/sidebar/Add_user.svg";
import logout from "../../../assets/image/sidebar/Logout.svg";

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
                            <Menu.Item key="1" className="client_refer" ><Link to="/startform" ><img src={refer} alt="add" />Refer a client</Link></Menu.Item>
                            <Menu.Item key="2" ><Link to="/" ><img src={home} alt="add" />Home</Link></Menu.Item>
                            <Menu.Item key="3" ><Link to="/clients" ><img src={user} alt="add" />My clients</Link></Menu.Item>
                            <Menu.Item key="4" ><Link to="/reports" ><img src={report} alt="add" />Reports & schedules</Link></Menu.Item>
                            <Menu.Item key="5" ><Link to="/commissions" ><img src={commission} alt="add" />Commissions</Link></Menu.Item>
                            <Menu.Item key="6" ><Link to="/bankdetails" ><img src={edit} alt="add" />Update bank details</Link></Menu.Item>
                            <Menu.Item key="7" ><Link to="/resources" ><img src={resource} alt="add" />Resources</Link></Menu.Item>
                            <Menu.Item key="8" ><Link to="/contact" ><img src={contact} alt="add" />Contact andy</Link></Menu.Item>
                            <Menu.Item key="9" ><Link to="/updatedetails" ><img src={edit} alt="add" />Update my details</Link></Menu.Item>
                            <Menu.Item key="10" ><Link to="/adduser" ><img src={adduser} alt="add" />Add user</Link></Menu.Item>
                        </div>
                        <div>
                            <Menu.Item key="11" ><Link to="/login" ><img src={logout} alt="add" />Log out</Link></Menu.Item>
                        </div>
                    </div>
                </Menu>
                {/* 17 Nov change End */}
            </Sider>
        </>
    );
}

export default Sidebar;