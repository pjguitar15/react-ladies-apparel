import React from 'react'
import { Navbar } from 'react-bootstrap'
const NavbarComp = () => {
  return (
    <Navbar className='shadow-sm py-3 d-block'>
      <Navbar.Brand className='ml-5 logo text-center'>
        Libre Baskerville
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-center'>
        <Navbar.Text className='mr-3'>
          <a href='#login'>Home</a>
        </Navbar.Text>
        <Navbar.Text className='mx-3'>
          <a href='#login'>Apparel</a>
        </Navbar.Text>
        <Navbar.Text className='mx-3'>
          <a href='#login'>Contact</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp
