import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '../StyledComponents/GlobalButtons.jsx'
// import cart Data from Context
import { CartItems, RemoveItemFromCart } from '../ContextAPI/Context.jsx'
const CartList = () => {
  const [cartItems] = useContext(CartItems)
  const removeFromCart = useContext(RemoveItemFromCart)
  return (
    <div className='bg-white w-100 py-3'>
      <Container>
        {cartItems.length < 1 && (
          <h1 className='text-center text-secondary'>Cart Empty :(</h1>
        )}
        {cartItems.map((item, index) => (
          <Row key={index} className='mb-3'>
            <Col md='3'>
              <div className='img-box'>
                <img
                  className='product-item-image'
                  src={item.image}
                  alt='img'
                />
              </div>
            </Col>
            <Col md='9' className='py-3'>
              <h4>{item.name}</h4>
              <div className='py-3'>
                <h4>${item.price}</h4>
              </div>
              <p
                className='col-9 p-0 text-secondary'
                style={{ fontSize: '13px' }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione optio maiores quos consequuntur tenetur similique alias
                autem porro rerum sint, velit tempore, facere sapiente,
                explicabo ipsam vero accusantium cumque voluptas.
              </p>
              <Button onClick={() => removeFromCart(item.id)} secondary>
                Remove from Cart
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default CartList
