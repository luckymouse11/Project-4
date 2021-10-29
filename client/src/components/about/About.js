import React from 'react'
// import { Link } from 'react-router-dom'

const About = () => {

  return (
    <section className="about mt-4 d-flex flex-column align-middle align-content-center">
      <div className="container">
        <article className="article">
          <h2>about</h2>
          <p>
            welcome to the sneaker-dom. 

            a website whose sole (😉) purpose is to allow sneaker-heads of the world to collaborate and show off their trainers.
            
            <br />


          </p>
        </article>
        <br />
        <br />
        <article className="article mt-4 ">
          <h2>creator</h2>
          
          
          <p>
            this website was created by victor liew, a general assembly student. the fourth and final project of the course displaying the knowledge of a 
            newly crowned &quot;full stack software engineer&quot;


            <br />


          </p>
          <br />
          <br />
          <div>
            <h3>victor liew</h3>
            <div className="about-profile-pic">
              <img src="https://res.cloudinary.com/yl/image/upload/v1635456338/sneakers/IMG_20211004_234507_581_hde86d.webp" alt="Victor" />
            </div>
            <div className="link-pic">
              <a href="https://github.com/luckymouse11" rel="noopener noreferrer" target="_blank">
                <img src="https://res.cloudinary.com/yl/image/upload/v1633551817/github_duwsnq.png" alt="GitHub"/>
              </a>
              <a href="https://www.linkedin.com/in/liewvictor/" rel="noopener noreferrer" target="_blank">
                <img src="https://res.cloudinary.com/yl/image/upload/v1633553148/linkedin_fir0qe.png" alt="LinkedIn"/>
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>
  )

}

export default About