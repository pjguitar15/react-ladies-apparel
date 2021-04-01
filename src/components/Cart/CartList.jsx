import React from 'react'
import item1 from '../../Assets/item1.jpg'
import { Container, Row, Col } from 'react-bootstrap'
const CartList = () => {
  return (
    <div className='bg-white w-100 py-3'>
      <Container>
        <Row>
          <Col md='3'>
            <div className='img-box'>
              <img className='product-item-image' src={item1} alt='img' />
            </div>
          </Col>
          <Col md='9' className='py-3'>
            <h4>Brazil Dress Compact</h4>
            <div className='py-3'>
              <h4>$100</h4>
            </div>
            <p className='col-9 p-0' style={{ fontSize: '14px' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              optio maiores quos consequuntur tenetur similique alias autem
              porro rerum sint, velit tempore, facere sapiente, explicabo ipsam
              vero accusantium cumque voluptas.
            </p>
            <button className='button-outline-dark'>Remove from Cart</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartList
