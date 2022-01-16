import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavagationL } from '../../helpers/NavagationL';
function links()  {
        return NavagationL.map((e, idx) => (
          <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
        ))
      }
function nav() {
    return (
        <div className='home'>
            <Navbar className= 'Nav-styles' expand='lg'>
            <Navbar.Brand href="#">Jennifer Devane</Navbar.Brand>     
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse>
                    <Nav>
                        {links()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default nav
