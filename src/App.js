import React from 'react'

// Components
import NavbarComp from './components/NavbarComp.jsx'
import JumbotronComp from './components/JumbotronComp.jsx'
import Category from './components/Category.jsx'
import ProductsWrapper from './components/Products/ProductsWrapper.jsx'
import StayInTrend from './components/StayInTrend.jsx'
import BigAdCard from './components/BigAdCard.jsx'
import FooterComp from './components/FooterComp.jsx'

const App = () => {
  return (
    <>
      <NavbarComp />
      <JumbotronComp />
      <Category />
      <ProductsWrapper />
      <StayInTrend />
      <BigAdCard />
      <FooterComp />
    </>
  )
}

export default App
