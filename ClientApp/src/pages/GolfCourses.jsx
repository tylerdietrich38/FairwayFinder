import React from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'

export function GolfCourses() {
  const [GolfCourses, setGolfCourses] = useState([])
  return (
    <>
      <body>
        <header>
          <ul className="logo">
            <img src={logo} alt="Logo" />
          </ul>
          <nav>
            <a href="/">
              <i className="fa fa-plus"></i> Home | Golf Courses | About
            </a>
            <p>Welcome back, Bob!</p>
          </nav>
        </header>
        <main className="main-home">
          <ul className="Courses">
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, a? Voluptatibus quibusdam ratione ex minima
                    corporis fugiat accusamus, atque, magni laboriosam voluptate
                    molestiae expedita, reprehenderit perferendis! Fuga
                    aspernatur aut minus.
                  </p>
                  <p>{GolfCourse.address}</p>
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