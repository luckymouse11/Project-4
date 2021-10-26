import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const history = useHistory()

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      await axios.post('/register', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(errors)
    }
  }

  return (
    <section className='form-page'>
      <div className='container'>
        <div className='row justify-content-center'>
          <form onSubmit={handleSubmit} className='col-10 col-md-6 mt-4'>
            <h2>Register</h2>
            <div className='form-field'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type='text' className='form-control' name='username' placeholder='Username' value ={FormData.username} onInput={handleChange}/>
            </div>
            <div className='form-field'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='email' className='form-control' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
            </div>
            <div className='form-field'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type='password' className='form-control' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
            </div>
            <div className='form-field'>
              <label htmlFor='passwordConfirmation' className='form-label'>Confirm Password</label>
              <input type='password' className='form-control' name='passwordConfirmation' placeholder='Password again' value ={FormData.passwordConfirmation} onInput={handleChange}/>
            </div>
            <button className='submit btn btn-primary'>Register</button>
            <p>Already registered? <Link to='/login'>Login</Link></p>
          </form>
          
        </div>
      </div>
    </section>
  )

}

export default Register