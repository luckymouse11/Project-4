import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='footer navbar navbar-expand flex-column mt-2 fixed-bottom'>
      <div className='align-items-center'>
        <ul className='footer-nav nav navbar-nav mb-1 mb-lg-0'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/sneakers' className='nav-link'>sneaker gallery</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>about</Link>
          </li>
        </ul>
      </div>
      <div className='container-fluid text-center justify-content-center'>
        <p>&copy; designed and built by victor liew<br />inspired by sneakerheads across the globe</p>
      </div>
    </footer>
  )

}

export default Footer