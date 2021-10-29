import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const history = useHistory()

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(errors)
    }
  }

  const notify = () => toast('Registration Successful!')


  return (
    <section className='form-page'>
      <div className='container'>
        <div className='row justify-content-center'>
          <form onSubmit={handleSubmit} className='col-10 col-md-6 mt-4'>
            <h2>Register</h2>
            <div className="d-flex justify-content-around">
              <div>
                <div className='form-field'>
                  <label htmlFor='username' className='form-label mt-4'>Username</label>
                  <input type='text' className='form-control' name='username' placeholder='Username' value ={FormData.username} onInput={handleChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='username' className='form-label mt-4'>First Name</label>
                  <input type='text' className='form-control' name='first_name' placeholder='First Name' value ={FormData.first_name} onInput={handleChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='username' className='form-label mt-4'>Last Name</label>
                  <input type='text' className='form-control' name='last_name' placeholder='Last Name' value ={FormData.last_name} onInput={handleChange}/>
                </div>
              </div>
              <div>
                <div className='form-field'>
                  <label htmlFor='email' className='form-label mt-4'>Email</label>
                  <input type='email' className='form-control' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='password' className='form-label mt-4'>Password</label>
                  <input type='password' className='form-control' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
                </div>
                <div className='form-field'>
                  <label htmlFor='password_confirmation' className='form-label mt-4'>Confirm Password</label>
                  <input type='password' className='form-control' name='password_confirmation' placeholder='Password again' value ={FormData.password_confirmation} onInput={handleChange}/>
                </div>
              </div>
            </div>
            <div>
              <button onClick={notify} autoClose={false} className='submit btn btn-primary m-4'>Register</button>
              <ToastContainer />
            </div>
            <p><Link to='/login'>Login here</Link></p>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Register