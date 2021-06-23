import React, { useEffect, useState } from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'
import { Link } from 'react-router-dom'

// function SingleGolfCourse(props) {
//   return (
//     <Link to={`/courses/${props.GolfCourses.id}`}>
//       <h4>{props.GolfCourse.name}</h4>
//     </Link>
//   )
// }

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

  const filter = ''

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
          <div className="grid-row">
            <Link to="/new">
              <button>Add New Course</button>
            </Link>
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
                {/* <SingleGolfCourse key={GolfCourse.id} GolfCourse={GolfCourse} /> */}
                <Link to={`/courses/${GolfCourse.id}`}>
                  <h4>{GolfCourse.name}</h4>
                </Link>
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
