import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import Select from 'react-select'

import SneakerCard from './SneakerCard'

const SneakerIndex = ({ rotatingSneaker }) => {

  const [ sneakers, setSneaker ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  const [ colours, setColours ] = useState([])
  const [ filteredSneakers, setFilteredSneakers ] = useState([])


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

  useEffect(() => {
    const getSneakers = async () => {
      try {
        const { data } = await axios('/api/sneakers/')
        setSneaker(data)
        // console.log(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getSneakers()
  }, [])

  const handleMultiSelected = (selected) => {
    const values = selected ? selected.map(item => item.label) : []

    const filtered = sneakers.filter(sneaker => {
      return sneaker.colour.some(colour => {
        return values.includes(colour.name)
      })
    })
    values.length > 0 ? setFilteredSneakers(filtered) : setFilteredSneakers([])
  }

  return (
    <section className="sneaker container mt-4">
      <div>
        <div className="row justify-content-center mb-4 filter">
          {/* <h5>filter</h5> */}
          <Select 
            className='col-12 col-md-8 col-lg-8 center'
            options={colourOptions}
            name='colours'
            isMulti='true'
            placeholder='Find sneakers by colour'
            onChange={(selected) => handleMultiSelected(selected)}
          />
        </div>
      </div>

      <div className="row row-eq-height g-3">
        {sneakers.length > 0 ?
          (filteredSneakers.length > 0 ? filteredSneakers : sneakers).map( sneaker => {
            //const owner = sneaker.owner
            //console.log(owner)
            return <SneakerCard key={sneaker.id} {...sneaker}/>
          })

          :

          <>
            {hasError ? 
              <h2 className='display-5 text-center'>Oh! Something went wrong</h2> 
              : 
              <img className='rotatingSneaker' src={rotatingSneaker} alt='Rotating Sneaker gif' />
            }
          </>
        }
      </div>
    </section>
  )

}

export default SneakerIndex