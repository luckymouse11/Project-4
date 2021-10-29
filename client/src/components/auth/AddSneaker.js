import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

const AddSneaker = () => {

  const history = useHistory()

  const [ colours, setColours ] = useState([])

  useEffect(() => {
    const getColours = async () => {
      try {
        const { data } = await axios('/api/colours/')
        setColours(data)
        // console.log('setColours ->', data)
      } catch (err) {
        console.log(err)
      }
    }
    getColours()
  }, [])

  const colourOptions = colours.map(colour => (
    { value: colour.name, label: colour.name, id: colour.id }
  ))


  const [formData, setFormData] = useState({
    model_name: '',
    brand: '',
    description: '',
    release_date: '',
    cost: '',
    image: '',
    colour: [],
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const handleMultiSelected = (selected) => {
    const values = selected ? selected.map(item => item.label) : []
    return values.includes(name)
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

  return (
    <section className="form-page">
      <div className="container">
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit} className="col-10 col-md-6 mt-4 align-middle">
            <h2>Log in</h2>
            <div className="form-field">
              <label htmlFor="model_name" className="form-label mt-4">Model Name</label>
              <input type="text" className="form-control" name="model_name" placeholder="Yeezy" value ={FormData.model_name} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="brand" className="form-label mt-4">Brand</label>
              <input type="text" className="form-control" name="brand" placeholder="Adidas" value ={FormData.brand} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="description" className="form-label mt-4">Description</label>
              <input type="text" className="form-control" name="description" placeholder="Description" value ={FormData.description} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="release_date" className="form-label mt-4">Release Year</label>
              <input type="text" className="form-control" name="release_date" placeholder="3099" value ={FormData.release_date} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="cost" className="form-label mt-4">Cost (£)</label>
              <input type="text" className="form-control" name="cost" placeholder="999" value ={FormData.cost} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="image" className="form-label mt-4">Upload Image</label>
              <input type="text" className="form-control" name="image" placeholder="" value ={FormData.image} onInput={handleChange}/>
            </div>
            <div className="form-field">
              <label htmlFor="colour" className="form-label mt-4">Colour/s</label>
              <input type="colour" className="form-control" name="colour" placeholder="colour" value ={FormData.colour} onInput={handleChange}/>
              <Select
                className="form-control"
                options={colourOptions}
                name="colours"
                isMulti="true"
                placeholder="select colour/s"
                onChange={(selected) => handleMultiSelected(selected)}
              />
            </div>
            <button className="submit btn btn-primary m-4">Submit them kicks</button>
          </form>
        </div>
      </div>
    </section>
  )

}

export default AddSneaker