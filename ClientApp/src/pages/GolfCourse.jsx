import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'
import { Link, useParams } from 'react-router-dom'

export function GolfCourse() {
  const params = useParams()
  const id = params.id

  const [GolfCourse, setGolfCourse] = useState({
    name: '',
    description: '',
    address: '',
    website: '',
  })

  useState(() => {
    const fetchGolfCourse = async () => {
      const response = await fetch(`/api/GolfCourses/${id}`)
      const apiData = await response.json()

      setGolfCourse(apiData)
    }

    fetchGolfCourse()
  }, [id])

  return (
    <>
      <body>
        <header>
          <section className="logo">
            <img src={logo} alt="Logo" />
          </section>
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
              <Link to="/login">
                <li>Sign In/Sign Up</li>
              </Link>
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <ul>
            <li>
              <h4>{GolfCourse.name}</h4>
              <section className="Golfpic">
                <img
                  src={TacoCourse}
                  alt="Golf Course"
                  height="140"
                  width="230"
                />
              </section>
              <div className="home-info">
                <p>{GolfCourse.description}</p>

                <p>Address: {GolfCourse.address}</p>

                <a href={GolfCourse.website}>
                  <p>{GolfCourse.website}</p>
                </a>
              </div>
            </li>
          </ul>
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
