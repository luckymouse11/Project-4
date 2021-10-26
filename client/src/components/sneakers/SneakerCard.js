import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SneakerCard = ({ id, rotatingSneaker }) => {
  
  // State
  const [ sneaker, setSneaker ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

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

  return (
    <>
      { sneaker ?
        <div className='sneaker col-12 col-md-6 col-lg-4'>
          
          <Link to={`/sneakers/${id}`} className='card h-80 text-center'>
            <div className='card-header'>
              <h5 className='mt-2'>{sneaker.release_date}<br />{sneaker.brand}<br/>{sneaker.model_name}</h5>
            </div>
            <img src={sneaker.image} alt={`${sneaker.model_name}`} className='card-image p-2'></img>
            <div className="card-footer">
              <p>£{sneaker.cost}</p>
            </div>
          </Link>
        </div>

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

export default SneakerCard