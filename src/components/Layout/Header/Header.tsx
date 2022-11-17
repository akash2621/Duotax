import "./Header.css";
import { Navbar , Container , Nav } from "react-bootstrap";
import call from "../../../assets/image/call.svg";
import user from "../../../assets/image/user.svg";
import setting from "../../../assets/image/setting.svg";

const Header = () =>{
    return(
        <>
            <div className="header_main">
                <Navbar collapseOnSelect expand="xl">
                    <div className="res-user" >
                        <Nav.Link href="#action1" className="user_name" ><img src={user} alt="user" />Brad Hibbard</Nav.Link>
                        <Nav.Link href="#action1" className="setting" ><img src={setting} alt="setting" /></Nav.Link>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="header_section" >
                            <form>
                                <input type="search" placeholder="search" />
                                <button>Search</button>
                            </form>
                            <Nav>
                                <Nav.Link href="tel:1300 185 498" className="call" ><img src={call} alt="call" />1300 185 498</Nav.Link>
                                <Nav.Link href="/updatedetails" className="user_name" ><img src={user} alt="user" />Brad Hibbard</Nav.Link>
                                <Nav.Link href="/updatedetails" className="setting" ><img src={setting} alt="setting" /></Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;