import React from 'react'
// import { Link } from 'react-router-dom'

const About = () => {

  return (
    <section className='about mt-4'>
      <div className='container'>
        <article className='article'>
          <h2>About</h2>
          <p>Inspiration for creating a sneaker site</p>
        </article>

        <article className='article mt-4'>
          <h2>Creator</h2>
          <div className='team-profile col-12 col-md-6 col-lg-4 mt-4' id='Victor'>
            <h4>Victor Liew</h4>
            <div className='about-profile-pic'>
              <img src='https://res.cloudinary.com/yl/image/upload/v1633555873/IMG_20210718_234843_921_pdxsw3.jpg' alt='Victor' />
            </div>
            <div className='link-pic'>
              <a href='https://github.com/luckymouse11'>
                <img src='https://res.cloudinary.com/yl/image/upload/v1633551817/github_duwsnq.png' alt='GitHub'/>
              </a>
              <a href='https://www.linkedin.com/in/liewvictor/'>
                <img src='https://res.cloudinary.com/yl/image/upload/v1633553148/linkedin_fir0qe.png' alt='LinkedIn'/>
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>
  )

}

export default About