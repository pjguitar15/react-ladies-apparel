import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ModalStyle = ({ showModal, setShowModal, currModalItem }) => {
  return (
    <div
      style={{ display: showModal ? 'block' : 'none' }}
      className='custom-modal fixed-top'
    >
      <div className='custom-modal-content d-flex justify-content-center align-items-center'>
        <Container>
          <Row>
            <Col md='3'>
              <div className='img-box position-relative'>
                <img
                  className='product-item-image'
                  src={currModalItem.image}
                  alt='test'
                />
              </div>
            </Col>
            <Col className='py-3'>
              <h4>{currModalItem.name}</h4>
              <h4 className='mt-4'>${currModalItem.price}</h4>
              <p
                style={{ fontSize: '14px', fontFamily: 'Open Sans' }}
                className='text-secondary col-10 p-0 mt-3'
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                dolor hic aliquid explicabo unde maxime iste sapiente ipsum
                ipsam, alias perspiciatis, nulla voluptatibus nesciunt
                praesentium rem, necessitatibus ea laboriosam nemo?
              </p>
              <div className='mt-4'>
                <Link to='/cart'>
                  <button className='button-outline-dark mr-2'>
                    Add to Cart
                  </button>
                </Link>
                <button
                  onClick={() => setShowModal(false)}
                  className='button-outline-dark'
                >
                  Back to Shopping
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ModalStyle
