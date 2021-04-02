import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const CartItems = React.createContext()
export const AddToCart = React.createContext()
export const CurrModalItem = React.createContext()
const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [currModalItem, setCurrModalItem] = useState({})
  const history = useHistory()
  const addToCart = () => {
    setCartItems([...cartItems, currModalItem])
    history.push('/cart')
  }

  return (
    <CartItems.Provider value={[cartItems, setCartItems]}>
      <AddToCart.Provider value={addToCart}>
        <CurrModalItem.Provider value={[currModalItem, setCurrModalItem]}>
          {children}
        </CurrModalItem.Provider>
      </AddToCart.Provider>
    </CartItems.Provider>
  )
}

export default Context
