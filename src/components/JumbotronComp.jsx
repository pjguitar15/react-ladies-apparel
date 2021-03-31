import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../Assets/front-page-lady.jpg'
const JumbotronComp = () => {
  return (
    <div className='jumbotron-comp'>
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
            <button className='button-primary'>Shop Now</button>
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
