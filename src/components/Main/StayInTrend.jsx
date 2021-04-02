import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import boxsvg from '../../Assets/box.svg'
const StayInTrend = () => {
  return (
    <div id='about' className='stay-in-trend-section'>
      <Container>
        {/* brown long box */}
        <div className='brown-long-box pt-5 pl-5'>
          <h2 className='text-light'>Stay in Trend with Libre Baskerville</h2>
        </div>
        {/* 3 boxes */}
        <div className='tri-box-parent'>
          <Row>
            <Col className='p-4' md='4'>
              <div className='mx-auto tri-box-item shadow-sm'>
                <img className='box-svg' src={boxsvg} alt='boxicon' />
                <h5 className='mt-4 mb-3'>Latest Styles</h5>
                <p className='text-secondary' style={{ fontSize: '12px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus.
                </p>
                <div
                  className='mt-5 read-more-link text-dark position-absolute'
                  href='#'
                >
                  Read More
                </div>
              </div>
            </Col>
            <Col className='p-4' md='4'>
              <div className='mx-auto tri-box-item shadow-sm'>
                <img className='box-svg' src={boxsvg} alt='boxicon' />
                <h5 className='mt-4 mb-3'>Latest Styles</h5>
                <p className='text-secondary' style={{ fontSize: '12px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus.
                </p>
                <div
                  className='mt-5 read-more-link text-dark position-absolute'
                  href='#'
                >
                  Read More
                </div>
              </div>
            </Col>
            <Col className='p-4' md='4'>
              <div className='mx-auto tri-box-item shadow-sm'>
                <img className='box-svg' src={boxsvg} alt='boxicon' />
                <h5 className='mt-4 mb-3'>Latest Styles</h5>
                <p className='text-secondary' style={{ fontSize: '12px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus.
                </p>
                <div
                  className='mt-5 read-more-link text-dark position-absolute'
                  href='#'
                >
                  Read More
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default StayInTrend
