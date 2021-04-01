import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
const StayInTrend = () => {
  return (
    <div className='stay-in-trend-section'>
      <Container>
        {/* brown long box */}
        <div className='brown-long-box pt-5 pl-5'>
          <h2 className='text-light'>Stay in Trend with Libre Baskerville</h2>
        </div>
        {/* 3 boxes */}
        <div className='tri-box-parent'>
          <Row>
            <Col className='p-4' md='4'>
              <div className='mx-auto tri-box-item shadow-sm'>TEST</div>
            </Col>
            <Col className='p-4' md='4'>
              <div className='mx-auto tri-box-item shadow-sm'>TEST</div>
            </Col>
            <Col className='p-4' md='4'>
              <div className=' mx-auto tri-box-item shadow-sm'>TEST</div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default StayInTrend
