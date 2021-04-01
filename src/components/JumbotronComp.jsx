import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../Assets/front-page-lady.jpg'
import { Link } from 'react-scroll'
const JumbotronComp = () => {
  return (
    <div id='home' className='jumbotron-comp'>
      <Container>
        <Row>
          {/* Left Column */}
          <Col lg='6' xs='12'>
            <h1
              className='text-dark text-center text-lg-left font-weight-bold'
              style={{ marginTop: '10rem' }}
            >
              Winter 21'
            </h1>
            <p className='text-center text-lg-left jumbo-paragraph col-lg-10 col-md-10 mx-md-auto mx-lg-0 col-12'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, iste magni labore quae minus non error animi totam
              dolorum animi totam dolorum animi totam dolorum animi totam
              dolorum.
            </p>
            <Link
              activeClass='link-active'
              to='apparel'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className='button-primary mx-auto mx-lg-0 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3 text-center'>
                Shop Now
              </div>
            </Link>
          </Col>
          {/* Right Column */}
          <Col
            className='d-none d-xl-block position-relative img-col'
            md='6'
            xs='12'
          >
            <img className='lady-img' src={img} alt='ladyimg' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JumbotronComp
