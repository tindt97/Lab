import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Button from 'react-bootstrap/Button';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                     <Navbar dark> 
                        <div className='container'>
                             <NavbarBrand href="/">Ristorante Con Confusion</NavbarBrand>
                        </div>
                     </Navbar>
            <div className='jumbotron' >
                     <div className='container'>
                        <div className='row row-header'>
                            <div className='col col-12 col-sm-6'>
                                <h1>Ristorante Con Confusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>    
                     </div>
            </div> 
            </React.Fragment>
        );
    }
}
export default Header;