import React, { useEffect, useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'

export function GolfCourses() {
  const [GolfCourses, setGolfCourses] = useState([])
  const [filterText, setFilterText] = useState('')

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
              <i className="home-header"></i> Home | Golf Courses | About
            </a>
          </nav>
        </header>
        <main className="main-sign">
          <div className="grid-row">
            <a href="/NewCourse">
              <button>Add New Course</button>
            </a>
            <form>
              <input
                type="text"
                placeholder="Search.."
                value={filterText}
                onChange={function (event) {
                  setFilterText(event.target.value)
                }}
              />
            </form>
          </div>
          <ul>
            {GolfCourses.map((GolfCourse) => (
              <li key={GolfCourse.id}>
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
