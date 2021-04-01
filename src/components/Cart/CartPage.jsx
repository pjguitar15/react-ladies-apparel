import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CartList from './CartList.jsx'
const CartPageComp = styled.div`
  height: 100vh;
  padding: 8rem 0;
  background: #f2f2f2;
`
const CartPage = () => {
  return (
    <CartPageComp>
      <Container>
        <Link to='/'>
          <button className='button-outline-dark'>Back to Shop</button>
        </Link>
        <h2
          className='my-4 font-weight-bold'
          style={{ fontFamily: 'Open Sans' }}
        >
          Cart Items
        </h2>
        
      </Container>
      <CartList />
    </CartPageComp>
  )
}

export default CartPage
