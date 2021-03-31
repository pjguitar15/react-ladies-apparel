import React from 'react'
import ProductList from './ProductList.jsx'
import { Container } from 'react-bootstrap'
const ProductsWrapper = () => {
  return (
    <div className='products-wrapper'>
      <Container className='p-0'>
        <ProductList />
      </Container>
    </div>
  )
}

export default ProductsWrapper
