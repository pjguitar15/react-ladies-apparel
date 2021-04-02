import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const CartItems = React.createContext()
export const AddToCart = React.createContext()
export const CurrModalItem = React.createContext()
export const SetModal = React.createContext()
export const RemoveItemFromCart = React.createContext()

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [currModalItem, setCurrModalItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const addToCart = () => {
    setCartItems([...cartItems, currModalItem])
    setShowModal(false)
    history.push('/cart')
  }

  const removeFromCart = (id) => {
    const filtered = cartItems.filter((item) => item.id !== id)
    setCartItems([...filtered])
  }

  return (
    <CartItems.Provider value={[cartItems, setCartItems]}>
      <AddToCart.Provider value={addToCart}>
        <CurrModalItem.Provider value={[currModalItem, setCurrModalItem]}>
          <SetModal.Provider value={[showModal, setShowModal]}>
            <RemoveItemFromCart.Provider value={removeFromCart}>
              {children}
            </RemoveItemFromCart.Provider>
          </SetModal.Provider>
        </CurrModalItem.Provider>
      </AddToCart.Provider>
    </CartItems.Provider>
  )
}

export default Context
