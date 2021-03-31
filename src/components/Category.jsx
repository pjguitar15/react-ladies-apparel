import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Category = () => {
  return (
    <Container className='category-parent'>
      <h4>Category</h4>
      <Row className='mt-4'>
        {/* boxes */}
        <Col md='1' className='px-3'>
          <div className='category-box inactive'>
            <i className='fas fa-mitten text-secondary'></i>
          </div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box active'>
            <i class='fas fa-tshirt text-white'></i>
          </div>
        </Col>

        {/* Dummy Buttons */}
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
        <Col md='1' className='px-3'>
          <div className='category-box inactive'></div>
        </Col>
      </Row>
    </Container>
  )
}

export default Category
