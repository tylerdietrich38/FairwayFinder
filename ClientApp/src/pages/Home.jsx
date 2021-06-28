import React, { useState, useEffect } from 'react'
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

export function Home() {
  const [GolfCourses, setGolfCourses] = useState([])
  const [filterText, setFilterText] = useState('')
  const [viewport, setViewport] = useState({
    latitude: 27.4373,
    longitude: -82.3611,
    zoom: 9.8,
  })

  const [selectedGolfCourse, setSelectedGolfCourse] = useState(null)

  useEffect(
    function () {
      async function loadGolfCourses() {
        const url =
          filterText.length === 0
            ? '/api/GolfCourses'
            : `/api/GolfCourses?filter=${filterText}`

        const response = await fetch(url)

        if (response.ok) {
          const json = await response.json()

          setGolfCourses(json)
        }
      }
      loadGolfCourses()
    },
    [filterText]
  )

  return (
    <>
      <body>
        <header>
          <ul className="logo">
            <img src={logo} alt="Logo" />
          </ul>
          <nav>
            <div className="header-row">
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>|</li>
              <Link to="/courses">
                <li>Golf Courses</li>
              </Link>
              <li>|</li>
              <Link to="/signin">
                <li>Sign In/Sign Up</li>
              </Link>
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <h2>{GolfCourses.length} Golf Courses near you!</h2>
          <ul className="golf-pic">
            <ReactMapGL
              {...viewport}
              onViewportChange={setViewport}
              style={{ position: 'absolute' }}
              width="100%"
              height="100%"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
              <div style={{ position: 'absolute', left: 10, top: 10 }}>
                <NavigationControl />
              </div>

              {selectedGolfCourse ? (
                <Popup
                  latitude={selectedGolfCourse.latitude}
                  longitude={selectedGolfCourse.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setSelectedGolfCourse(null)}
                  offsetTop={-5}
                  offsetLeft={7}
                >
                  <div>
                    <Link to={`/courses/${selectedGolfCourse.id}`}>
                      <h4>{selectedGolfCourse.name}</h4>
                    </Link>
                    <p>{selectedGolfCourse.description}</p>
                  </div>
                </Popup>
              ) : null}

              {GolfCourses.map((GolfCourse) => (
                <Marker
                  key={GolfCourse.id}
                  latitude={GolfCourse.latitude}
                  longitude={GolfCourse.longitude}
                >
                  <span
                    role="img"
                    aria-label="golf"
                    onClick={() => setSelectedGolfCourse(GolfCourse)}
                  >
                    ⛳️
                  </span>
                </Marker>
              ))}
            </ReactMapGL>
          </ul>
          {/* <div className="results">
            {GolfCourses.map((GolfCourse) => (
              <SingleGolfCourse key={GolfCourse.id} GolfCourse={GolfCourse} />
            ))}
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
