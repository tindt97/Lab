import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

// class Header extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isNavOpen: false
//         };
//         this.toggleNav = this.toggleNav.bind(this);
//     }
//     toggleNav() {
//         this.setState({
//             isNavOpen: !this.state.isNavOpen
//         });
//     }
//     render() {
//         return (
//             <React.Fragment>
//                     <Navbar color ="primary">
//                         <div className='container'>
//                         <NavbarToggler onClick={this.toggleNav}/>
//                         <NavbarBrand className='mr-auto' href="/">
//                             <img src="assets/images/logo.png" height="30" width="41"
//                             alt="Ristorante Con Fusion" />
//                         </NavbarBrand>
//                         <Collapse isOpen={this.state.isNavOpen} navbar>
//                         <Nav navbar>

//                             <NavItem>
//                                 <NavLink className="nav-link" to="/home">
//                                     <span className='fa fa-users fa-lg'></span> Nhân viên
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to="/aboutus">
//                                     <span className='fa fa-info fa-lg'></span> Phòng ban
//                                 </NavLink>
//                             </NavItem>
//                              <NavItem>
//                                 <NavLink className="nav-link" to="/menu">
//                                     <span className='fa fa-list fa-lg'></span> Bảng lương
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to="/contactus">
//                                     <span className='fa fa-address-card fa-lg'></span> Contact Us
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                         </Collapse>
//                         </div>
//                      </Navbar>

//             </React.Fragment>
//         );
//     }
// }

function Header() {
  return (
    <div>
      <Navbar dark expan="md" color="#7c99eb">
        <Nav>
          <NavItem>
            <NavLink active href="/nhanvien">
              <img
                src="assets/images/logo.png"
                width="40"
                height="31"
                alt="Quan li nhan vien"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/nhanvien">
              <span className="fa fa-users fa-lg"></span> Nhan vien
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/department">
              <span className="fa fa-id-card-o fa-lg"></span> Phong ban
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/salary">
              <span className="fa fa-money fa-lg"></span> Bang luong
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
    // <div>
    //   <Navbar dark expan="md" color="primary">
    //     {/* <NavbarToggler onClick={this.ToggleNav}/> */}

    //     <NavbarBrand className="mr-auto" href="/">
    //       <img
    //         src="assets/images/logo.png"
    //         width="40"
    //         height="31"
    //         alt="Quan li nhan vien"
    //       />
    //     </NavbarBrand>
    //     <Nav navbar>
    //       <NavItem>
    //         <Link className="nav-link" to="/nhanvien">
    //           <span className="fa fa-users fa-lg"></span> Nhan vien
    //         </Link>
    //       </NavItem>
    //       <NavItem>
    //         <Link className="nav-link" to="/department">
    //           <span className="fa fa-id-card-o fa-lg"></span> Phong ban
    //         </Link>
    //       </NavItem>
    //       <NavItem>
    //         <Link className="nav-link" to="/salary">
    //           <span className="fa fa-money fa-lg"></span> Bang luong
    //         </Link>
    //       </NavItem>
    //     </Nav>
    //   </Navbar>
    // </div>
  );
}
export default Header;
