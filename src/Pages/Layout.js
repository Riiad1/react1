import React from 'react'
import '../Components/Layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../icons/naturalbardhlogo.png'
import '../Components/Layout.scss'
import {FiLogOut} from 'react-icons/fi'
import '../Components/Variables.scss'

function Layout() {


  return (
    <>
    <Navbar className='navb' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' style={{ width: '200px', marginRight: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'  />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/home' style={{ marginRight: '90px' }}>
              HOME
            </Nav.Link>
            <Nav.Link href='/Data' style={{ marginRight: '90px' }}>
              SERVICES
            </Nav.Link>
            <Nav.Link href='/About' style={{ marginRight: '90px' }}>
              ABOUT US
            </Nav.Link>
            <Nav.Link href='/Contact' style={{ marginRight: '90px' }}>
              Contact US
            </Nav.Link>
            <Nav.Link href='/'>
              <FiLogOut size={30} /> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Outlet/>

    </>
  )
}

export default Layout