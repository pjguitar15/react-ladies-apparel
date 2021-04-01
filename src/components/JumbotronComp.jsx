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
          <Col md='6' xs='12'>
            <h1
              className='text-dark font-weight-bold'
              style={{ marginTop: '10rem' }}
            >
              Winter 21'
            </h1>
            <p className='jumbo-paragraph col-10'>
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
              <div className='button-primary col-2 text-center'>Shop Now</div>
            </Link>
          </Col>
          {/* Right Column */}
          <Col className='position-relative img-col' md='6' xs='12'>
            <img className='lady-img' src={img} alt='ladyimg' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JumbotronComp
