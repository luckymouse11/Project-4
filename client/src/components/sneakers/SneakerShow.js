import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const SneakerShow = ({ rotatingSneaker }) => {
  
  // State
  const [ sneaker, setSneaker ] = useState(null)
  const [ hasError, setHasError ] = useState(false)


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
              <div className="col-12 col-md-6">
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
              <hr />
              <Link to="/sneakers" className="btn btn-primary">Back to sneakers</Link>
            </div>
          </div>
          <div className="reviews">
            <h4>Comments</h4>
            <p>{sneaker.reviews.sneaker}</p>
            <p>{sneaker.owner.username}</p>
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