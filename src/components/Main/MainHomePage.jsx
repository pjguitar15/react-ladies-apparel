import React from 'react'
// Components
import JumbotronComp from './JumbotronComp.jsx'
import Category from './Category.jsx'
import ProductsWrapper from '../Products/ProductsWrapper.jsx'
import StayInTrend from './StayInTrend.jsx'
import BigAdCard from './BigAdCard.jsx'
import FooterComp from './FooterComp.jsx'
const MainHomePage = () => {
  return (
    <div>
      <JumbotronComp />
      <Category />
      <ProductsWrapper />
      <StayInTrend />
      <BigAdCard />
      <FooterComp />
    </div>
  )
}

export default MainHomePage
