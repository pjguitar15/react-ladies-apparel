import React, { useState } from 'react'
import ProductList from './ProductList.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import item1 from '../../Assets/item1.jpg'
const ProductsWrapper = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div id='apparel' className='products-wrapper'>
      {/* Modal */}
      <div
        style={{ display: showModal ? 'block' : 'none' }}
        className='custom-modal fixed-top'
      >
        <div className='custom-modal-content d-flex justify-content-center align-items-center'>
          <Container>
            <Row>
              <Col md='3'>
                <div className='img-box position-relative'>
                  <img className='product-item-image' src={item1} alt='test' />
                </div>
              </Col>
              <Col className='py-3'>
                <h4>Brazil Dress Compact</h4>
                <h4 className='mt-4'>$100</h4>
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
                  <button className='button-outline-dark mr-2'>
                    Add to Cart
                  </button>
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
      {/* Modal end */}
      <Container className='p-0'>
        <ProductList setShowModal={setShowModal} />
      </Container>
    </div>
  )
}

export default ProductsWrapper
