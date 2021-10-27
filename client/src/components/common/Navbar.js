import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/Auth.js'

const Nav = () => {

  const history = useHistory
  const location = useLocation

  useEffect(()=>{
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-sm justify-content-between bb-3">
      <div className="container-fluid">
        <div className="nav navbar-nav mb-1 mb-lg-0 d-flex align-middle">
          <li className="nav-item m-2">
            <Link to="/" className="nav-link">home</Link>
          </li>
          <div className="nav-item m-3 dropdown">
            <button className="dropbtn">drop menu</button>
            <div className="dropdown-content">
              <Link to="/sneakers/" className="nav-link">brand 1</Link>
              <Link to="/sneakers/" className="nav-link">brand 2</Link>
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
            userIsAuthenticated() ?
              <>
                <li className='nav-item m-2'>
                  <span className='nav-link logout-link' onClick={handleLogout} >logout</span>
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