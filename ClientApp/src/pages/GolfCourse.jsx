import React, { useEffect, useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'

export function GolfCourse() {
  const [GolfCourses, setGolfCourses] = useState([])

  useEffect(function () {
    async function loadGolfCourses() {
      const response = await fetch('/api/GolfCourses')

      if (response.ok) {
        const json = await response.json()

        setGolfCourses(json)
      }
    }
    loadGolfCourses()
  }, [])

  return (
    <>
      <body>
        <header>
          <section className="logo">
            <img src={logo} alt="Logo" />
          </section>
          <nav>
            <a href="/">
              <i className="fa fa-plus"></i> Home | Golf Courses | About
            </a>
          </nav>
        </header>
        <main className="main-sign">
          <ul>
            {GolfCourses.map((GolfCourse) => (
              <li>
                <a href="/GolfCourse">
                  <h4>{GolfCourse.name}</h4>
                </a>
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

                  <p>{GolfCourse.website}</p>

                  {/* <p>{GolfCourse.website}</p> */}
                </div>
              </li>
            ))}
          </ul>
        </main>
        <div className="container">
          <footer>
            <p>Built with 🤘 in Bradenton, Florida.</p>
          </footer>
        </div>
      </body>
    </>
  )
}
