import React from 'react'

// Components
import NavbarComp from './components/NavbarComp.jsx'
import JumbotronComp from './components/JumbotronComp.jsx'
import Category from './components/Category.jsx'
import ProductsWrapper from './components/Products/ProductsWrapper.jsx'
import StayInTrend from './components/StayInTrend.jsx'

const App = () => {
  return (
    <div>
      <NavbarComp />
      <JumbotronComp />
      <Category />
      <ProductsWrapper />
      <StayInTrend />
    </div>
  )
}

export default App
