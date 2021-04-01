import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import NavbarComp from './components/NavbarComp.jsx'
import MainHomePage from './components/MainHomePage.jsx'
import CartPage from './components/Cart/CartPage.jsx'

const App = () => {
  return (
    <>
      <NavbarComp />
      <Router>
        <Switch>
          <Route exact path='/' component={MainHomePage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
