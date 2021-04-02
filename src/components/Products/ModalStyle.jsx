import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import Context
import { AddToCart } from '../ContextAPI/Context.jsx'

import { Button } from '../StyledComponents/GlobalButtons.jsx'
import { CustomModal, ModalContent } from '../StyledComponents/CustomModal.jsx'
const ModalStyle = ({ showModal, setShowModal, currModalItem }) => {
  const addToCart = useContext(AddToCart)
  return (
    <CustomModal
      style={{ display: showModal ? 'block' : 'none' }}
      className='fixed-top'
    >
      <ModalContent className='d-flex justify-content-center align-items-center'>
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
                <Button onClick={addToCart} secondary className='mr-2'>
                  Add to Cart
                </Button>

                <Button secondary onClick={() => setShowModal(false)}>
                  Back to Shopping
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </ModalContent>
    </CustomModal>
  )
}

export default ModalStyle
