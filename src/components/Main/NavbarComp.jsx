import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
const NavbarComp = () => {
  return (
    <Navbar className='shadow-sm py-3 d-block fixed-top bg-white'>
      <Navbar.Brand className='ml-5 logo text-center'>
        <Link
          activeClass='link-active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          Libre Baskerville
        </Link>
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
          <div className='mx-4'>Home</div>
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
          <div className='mx-4'>Apparel</div>
        </Link>
        <Link
          activeClass='link-active'
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <div className='mx-4'>About</div>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp
