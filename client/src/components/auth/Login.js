import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token)=>{
    window.localStorage.setItem('token',token)
    history.push('/sneakers')
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      history.push('/sneakers/')
    } catch (err) {
      console.log(err)
    }
  }

  const notify = () => toast('Login Successful!')


  return (
    <section className="form-page">
      <div className="container">
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit} className="col-10 col-md-6 mt-4 align-middle">
            <h2>Log in</h2>
            <div className="form-field">
              <label htmlFor="email" className="form-label mt-4">Email</label>
              <input type="text" className="form-control" name="email" placeholder="name@email.com" value ={FormData.email} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="password" className="form-label mt-4">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password" value ={FormData.password} onInput={handleChange}/>
            </div>
            <div>
              <button onClick={notify} autoClose={false} className="submit btn btn-primary m-4">Log in</button>
              <ToastContainer />
            </div>
            <p><Link to="/register">Register here</Link></p>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login