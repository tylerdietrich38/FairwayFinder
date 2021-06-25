import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

export function Home() {
  const [GolfCourses, setGolfCourses] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 27.4373,
    longitude: -82.3611,
    zoom: 9.8,
  })

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
              <li>|</li>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <h2>Golf Courses near you!</h2>
          {/* <a href="/GolfCourse">
            <h4>Golf Course Name</h4>
          </a> */}
          <ul className="golf-pic">
            <ReactMapGL
              {...viewport}
              style={{ position: 'absolute' }}
              width="100%"
              height="100%"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
              <div style={{ position: 'absolute', left: 10 }}>
                <NavigationControl />
              </div>

              {GolfCourses.map((GolfCourse) => (
                <Marker
                  key={GolfCourse.id}
                  latitude={GolfCourse.latitude}
                  longitude={GolfCourse.longitude}
                >
                  <span role="img" aria-label="taco">
                    ⛳️
                  </span>
                </Marker>
              ))}
            </ReactMapGL>
          </ul>
          {/* <div className="home-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              a? Voluptatibus quibusdam ratione ex minima corporis fugiat
              accusamus, atque, magni laboriosam voluptate molestiae expedita,
              reprehenderit perferendis! Fuga aspernatur aut minus.
            </p>
          </div> */}
        </main>
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
      </body>
    </>
  )
}
