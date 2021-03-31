import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import products
import productsData from './ProductsData'
const ProductList = () => {
  return (
    <div>
      <Row>
        {/* Image Box */}
        {productsData.map((item, index) => (
          <Col key={index} className='mb-5'>
            <div className='img-box position-relative'>
              <img className='product-item-image' src={item.image} alt='test' />
            </div>
            <div style={{ fontSize: '12px' }} className='text-secondary mt-3'>
              {item.category}
            </div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductList
