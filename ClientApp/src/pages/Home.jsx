import React from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <body>
        <header>
          <ul className="logo">
            <img src={logo} alt="Logo" />
          </ul>
          <nav>
            <div className="grid-row">
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>|</li>
              <Link to="/courses">
                <li>Golf Courses</li>
              </Link>
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <h2>Golf Courses near you!</h2>
          <a href="/GolfCourse">
            <h4>Golf Course Name</h4>
          </a>
          <ul className="Golfpic">
            <img src={TacoCourse} alt="Golf Course" height="140" width="230" />
          </ul>
          <div className="home-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              a? Voluptatibus quibusdam ratione ex minima corporis fugiat
              accusamus, atque, magni laboriosam voluptate molestiae expedita,
              reprehenderit perferendis! Fuga aspernatur aut minus.
            </p>
          </div>
          <a href="/GolfCourse">
            <h4>Golf Course Name</h4>
          </a>
          <ul className="Golfpic">
            <img src={TacoCourse} alt="Golf Course" height="140" width="230" />
          </ul>
          <div className="home-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              a? Voluptatibus quibusdam ratione ex minima corporis fugiat
              accusamus, atque, magni laboriosam voluptate molestiae expedita,
              reprehenderit perferendis! Fuga aspernatur aut minus.
            </p>
          </div>
        </main>
        <div className="container">
          <footer>
            <p>Built with 🤘 in Bradenton, Florida.</p>
            <div className="grid-row">
              <a href="https://github.com/tylerdietrich38">
                <li>Github</li>
              </a>
              <li>|</li>
              <a href="https://www.linkedin.com/in/tylerdietrich38/">
                <li>Linkedin</li>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </>
  )
}
