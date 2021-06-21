import React, { useEffect, useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'

export function GolfCourses() {
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

  const filter = 'r'

  const matchingGolfCourses = GolfCourses.filter((GolfCourse) =>
    GolfCourse.name.includes(filter)
  )
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
            <p>Welcome back, Bob!</p>
          </nav>
        </header>
        <main className="main-home">
          <form>
            <input type="text" placeholder="Search.." />
          </form>
          <ul>
            {GolfCourses.map((GolfCourse) => (
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
                </div>
              </li>
            ))}
          </ul>
          <footer>
            <p>Built with 🤘 in Bradenton, Florida.</p>
          </footer>
        </main>
      </body>
    </>
  )
}
