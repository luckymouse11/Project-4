import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Home from './components/Home'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import SneakerIndex from './components/sneakers/SneakerIndex'
import SneakerShow from './components/sneakers/SneakerShow'

import About from './components/about/About'

// Images
import rotatingSneaker from './images/rotatingSneaker.gif'


function App() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/sneakers/')
      console.log(data)
    }
    getData()
  })


  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sneakers">
            <SneakerIndex rotatingSneaker={rotatingSneaker}/>
          </ Route>
          <Route exact path="/sneakers/:id" >
            <SneakerShow rotatingSneaker={rotatingSneaker}/>
          </ Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path ="/register" >
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
