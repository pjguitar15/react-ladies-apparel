import React, { useState } from 'react'
import ProductList from './ProductList.jsx'
import { Container } from 'react-bootstrap'
import ModalComp from './ModalStyle.jsx'
const ProductsWrapper = () => {
  const [showModal, setShowModal] = useState(false)
  const [currModalItem, setCurrModalItem] = useState({})

  const onProductItemClick = (item) => {
    setCurrModalItem(item)
    setShowModal(true)
  }
  return (
    <div id='apparel' className='products-wrapper'>
      <ModalComp
        currModalItem={currModalItem}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Container className='p-0'>
        <ProductList onProductItemClick={onProductItemClick} />
      </Container>
    </div>
  )
}

export default ProductsWrapper
