import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Import Context Provider
import ContextProvider from './components/ContextAPI/Context.jsx'

// Components
import NavbarComp from './components/Main/NavbarComp.jsx'
import MainHomePage from './components/Main/MainHomePage.jsx'
import CartPage from './components/Cart/CartPage.jsx'

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <NavbarComp />
        <Switch>
          <Route exact path='/' component={MainHomePage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </ContextProvider>
    </Router>
  )
}

export default App
