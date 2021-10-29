import React from 'react'
// import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'


const Home = () => {
  return (
    <>
      <div className="hero text-center">
        <h1>welcome to the sneaker-dom</h1>
      </div>
      <div className="carousel-wrapper d-flex align-space-between">
        <Carousel infiniteLoop autoPlay>
          <div>
            <img src="https://res.cloudinary.com/yl/image/upload/v1635207785/sneakers/skytop-redcarpet_vufpmp.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/yl/image/upload/v1635207399/sneakers/Nike_SB_Dunk_High_Gundam_kyrwzn.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/yl/image/upload/v1635207394/sneakers/Dame_7_EXTPLY_OppAdv_tnsufg.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/yl/image/upload/v1635207397/sneakers/Nike_Lebron_18_Low_q8ycza.png" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/yl/image/upload/v1635206876/sneakers/Air_Jordan_1_Retro_Chicago-removebg-preview_bgzfhw.png" />
          </div>
        </Carousel>
        {/* <img src="https://res.cloudinary.com/yl/image/upload/v1635417130/sneakers/LeBronTerryDunk_vsdc3n.gif" alt="Responsive image"/> */}
      </div>
    </>
  )
}

export default Home