import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
const NavbarComp = () => {
  return (
    <Navbar className='shadow-sm py-3 d-block fixed-top bg-white'>
      <Navbar.Brand className='ml-5 logo text-center'>
        Libre Baskerville
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-center'>
        {/* react-scroll to id */}
        <Link
          activeClass='link-active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <div className='mx-3'>Home</div>
        </Link>

        <Link
          activeClass='link-active'
          to='apparel'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <div>Apparel</div>
        </Link>

        <Navbar.Text className='mx-3'>
          <a href='#login'>Contact</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp
