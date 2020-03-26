import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import FlimicPro from './components/FlimicApp'
import Home from './components/Home/Home'
import history from './components/services/history'

function App() {
  return (
    <main>
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path='/' title='TechGameCinema' component={Home} />
          <Route
            path='/FlimicPro'
            title='Flimic Pro Free App'
            component={FlimicPro}
          />
        </Switch>
      </Router>
      <Footer />
    </main>
  )
}

export default App
