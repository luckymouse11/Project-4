import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'

const Nav = () => {

  const history = useHistory()
  const location = useLocation()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    setIsLoggedIn(userIsAuthenticated())
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    // location.reload()
  }
  

  return (
    <nav className="navbar navbar-expand-sm justify-content-between bb-3">
      <div className="container-fluid">
        <div className="nav navbar-nav mb-1 mb-lg-0 d-flex align-middle">
          <li className="nav-item m-2">
            <Link to="/" className="nav-link">home</Link>
          </li>
          <div className="nav-item m-3 dropdown">
            <button className="dropbtn">brands</button>
            <div className="dropdown-content">
              <Link to="/sneakers/" className="nav-link">adidas</Link>
              <Link to="/sneakers/" className="nav-link">nike</Link>
              <Link to="/sneakers/" className="nav-link">supra</Link>
              <hr />
              <Link to="/sneakers/" className="nav-link">...sneaker list</Link>
            </div>
          </div>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <li className="nav-item m-2">
            <Link to="/about/" className="nav-link">about</Link>
          </li>
          {
            isLoggedIn ?
              <>
                <li className="nav-item m-2">
                  <Link to="/" className="nav-link logout-link" onClick={handleLogout} >logout</Link>
                </li>
              </>
              :
              <>
                <li className="nav-item m-2 ">
                  <Link to="/login/" className="nav-link">login</Link>
                </li>
                <li className="nav-item m-2 ">
                  <Link to="/register/" className="nav-link">register</Link>
                </li>
              </>
          }
        </div>
      </div>
    </nav>

  )

}

export default Nav