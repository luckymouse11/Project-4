import React from 'react'
// import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Nav = () => {

  // const history = useHistory
  // const location = useLocation

  // useEffect(()=>{
  // }, [location.pathname])

  // const handleLogout = () => {
  //   window.localStorage.removeItem('token')
  //   history.push('/')
  // }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between bb-3">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">👟</Link>
        </div>
        <div className="nav-item m-2 dropdown">
          <li className="nav-item m-2">
            <Link to="/" className="navbar-brand">Make this a Brand dropdown</Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/sneakers" className="navbar-brand">Sneaker List</Link>
          </li>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <li className="nav-item m-2">
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </div>
      </div>
    </nav>
  )

}

export default Nav