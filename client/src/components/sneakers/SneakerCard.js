// import React, { useState, useEffect } from 'react'
import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

// const SneakerCard = ({ id, release_date: releaseDate, model_name: modelName, brand, cost, image, rotatingSneaker }) => {
const SneakerCard = ({ id, release_date: releaseDate, model_name: modelName, brand, cost, image }) => {

  
  // State
  // const [ sneaker, setSneaker ] = useState(null)
  // const [ hasError, setHasError ] = useState(false)

  // useEffect(() => {
  //   const getSneaker = async() => {
  //     try {
  //       const { data } = await axios(`/api/sneakers/${id}`)
  //       setSneaker(data)
  //     } catch (err) {
  //       setHasError(true)
  //     }
  //   }
  //   getSneaker()
  // }, [id])

  return (
    <>
      {/* { sneaker ? */}
      <div className='sneaker col-12 col-md-6 col-lg-4 grow'>
          
        <Link to={`/sneakers/${id}`} className='card h-80 text-center'>
          <div className='card-header'>
            <h5 className='mt-2'>{releaseDate}<br />{brand}<br/>{modelName}</h5>
          </div>
          <img src={image} alt={`${modelName}`} className='card-image p-2'></img>
          <div className="card-footer">
            <p>£{cost}</p>
          </div>
        </Link>
      </div>
      {/* 
        :

        <>
          {hasError ? 
            <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
            : 
            <img className='rotatingSneaker' src={rotatingSneaker} alt='Rotating Sneaker gif' />
          }
        </>

      } */}
    </>
  )
}

export default SneakerCard