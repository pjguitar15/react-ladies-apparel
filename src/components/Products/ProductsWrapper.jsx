import React, { useContext } from 'react'
import ProductList from './ProductList.jsx'
import { Container } from 'react-bootstrap'
import ModalComp from './ModalStyle.jsx'
// import Context
import { CurrModalItem, SetModal } from '../ContextAPI/Context.jsx'
const ProductsWrapper = () => {
  const [showModal, setShowModal] = useContext(SetModal)
  const [currModalItem, setCurrModalItem] = useContext(CurrModalItem)

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
