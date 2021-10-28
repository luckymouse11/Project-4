import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams, Link } from 'react-router-dom'


const SneakerShow = ({ rotatingSneaker }) => {
  
  // State
  const [ sneaker, setSneaker ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const [formData, setFormData] = useState({
    text: '',
  })

  const [errors, setErrors] = useState({
    text: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const history = useHistory()

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      await axios.post('/api/reviews/', formData)
      history.push(`/sneaker/${id}`)
    } catch (err) {
      setErrors(err.response.data.errors)
      console.log(errors)
    }
  }

  // Params
  const { id } = useParams()

  useEffect(() => {
    const getSneaker = async() => {
      try {
        const { data } = await axios(`/api/sneakers/${id}/`)
        setSneaker(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getSneaker()
  }, [id])

  useEffect(() => console.log(sneaker), [sneaker])


  return (
    <>
      { sneaker ? 
        <>
          <div className="sneaker-show container mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={sneaker.image} alt={sneaker.brand} className="col-12"/>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-stretch">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Brand</th>
                      <td>{sneaker.brand}</td>
                    </tr>
                    <tr>
                      <th>Model</th>
                      <td>{sneaker.model_name}</td>
                    </tr>
                    <tr>
                      <th>Last known price</th>
                      <td>£{sneaker.cost}</td>
                    </tr>
                    <tr>
                      <th>Release Year:</th>
                      <td>{sneaker.release_date}</td>
                    </tr>
                    <tr>
                      <th>Colours</th>
                      <td className="list-unstyled">{sneaker.colour.map(colour => <li key={colour.id}>{colour.name}</li>)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <hr />
              <h4>Description</h4>
              <p>{sneaker.description}</p>
              <hr />
              <h4>Added by</h4>
              <p><Link to={`/users/${sneaker.owner._id}`}>{sneaker.owner.username}</Link></p>
              <hr className="col-12 col-md-6"/>
              <Link to="/sneakers" className="btn btn-primary">Back to sneakers</Link>
              <br />
              <br />
              <h4>Comments</h4>
              <div className="col-12 col-md-6">
                {sneaker.reviews.map(review => 
                  <p key={review.id} className="d-flex flex-column">
                    {review.owner.username}:
                    <br/>
                    {review.text}
                  </p>
                )}
              </div>
              <hr className="col-12 col-md-6"/>



              <form onSubmit={handleSubmit} className="col-10 col-md-6 mt-4" method="POST" encType="multipart/form-data">
                <textarea className="form-control" name="comment" placeholder="Add a comment" value ={FormData.text} onInput={handleChange}/>
                <button className="btn btn-primary mt-3" name="postComment" type="submit">COMMENT</button>
              </form>



            </div>
          </div>
        </>
        :
        <>
          {hasError ? 
            <h2 className="display-5 text-center">Oh! Something went wrong</h2> 
            : 
            <img className="rotatingSneaker" src={rotatingSneaker} alt="Rotating Sneaker gif" />
          }
        </>
      }
    </>
  )

}

export default SneakerShow