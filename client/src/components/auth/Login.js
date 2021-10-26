import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
// import { getPayload } from '../helpers/Auth'

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

  // const [errors, setErrors] = useState('')

  const handleSubmit = async(event)=>{
    event.preventDefault()
    try {
      const { data } = await axios.post('/login', formData)
      setTokenToLocalStorage(data.token)
      history.push('/sneakers/')
    } catch (err) {
      // setErrors()
      console.log(err)
    }
  }
  const setTokenToLocalStorage = (token)=>{
    window.localStorage.setItem('token',token)
  }


  return (
    <section className='form-page'>
      <div className='container'>
        <div className='row justify-content-center'>
          <form onSubmit={handleSubmit} className='col-10 col-md-6 mt-4'>
            <h2>Log in</h2>
            <div className='form-field'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='text' className='form-control' name='email' placeholder='name@email.com' value ={FormData.email} onInput={handleChange}/>
            </div>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' name='password' placeholder='Password' value ={FormData.password} onInput={handleChange}/>
            <button className='submit btn btn-primary'>Log in</button>
            {/* {errors && <p className="error">{errors}</p>} */}
            <p><Link to='/register'>Register here</Link></p>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login