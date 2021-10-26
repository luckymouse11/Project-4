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
        const { data } = await axios(`/api/sneakers/${id}`)
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
          <div className='sneaker-show container mt-4'>
            <h2>{sneaker.model_name}</h2>
            <hr />
            <div className='row'>
              <div className='col-12 col-md-6'>
                <img src={sneaker.image} alt={sneaker.brand} className='col-12'/>
              </div>
              <h4>💰 Last known price: £{sneaker.cost}</h4>
              <hr />
              <h4><span>📅 </span> Release: {sneaker.release_date}</h4>
              <hr />
              <h4><span>🎨</span> Key Colours</h4>
              <p>{sneaker.colour.name}</p>
              <hr />
              <h4><span>🌍</span></h4>
              <p>This sneaker is from: <a href={sneaker.url}>{sneaker.url}</a></p>
              <hr />
              <h4><span>📝</span> Description</h4>
              <p>{sneaker.description}</p>
              <hr />
              <h4><span>🧑‍🍳</span> Added by</h4>
              <p><Link to={`/users/${sneaker.owner._id}`}>{sneaker.owner.username}</Link></p>
              <hr />
              <Link to='/sneakers' className='btn btn-primary orange-button'>Back to sneakers</Link>
            </div>
            <hr />
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
            <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
            : 
            <img className='rotatingSneaker' src={rotatingSneaker} alt='Rotating Sneaker gif' />
          }
        </>
      }
    </>
  )

}

export default SneakerShow