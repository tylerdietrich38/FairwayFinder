import React from 'react'
import logo from '../Images/Logo.png'
import TacoCourse from '../Images/TacoCourse.jpg'

export function NewCourse() {
  return (
    <>
      <body>
        <header>
          <ul className="logo">
            <img src={logo} alt="Logo" />
          </ul>
          <nav>
            <a href="/">
              <i className="menu"></i> Home | Golf Courses | About
            </a>
            <p>Welcome back, username!</p>
          </nav>
        </header>
        <main className="main-sign">
          <form action="#">
            <p className="form-input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p className="form-input">
              <label htmlFor="description">Description</label>
              <textarea name="description"></textarea>
              <span className="note">Brief description</span>
            </p>
            <p className="form-input">
              <label htmlFor="name">Address</label>
              <textarea name="address"></textarea>
            </p>
            <p className="form-input">
              <label htmlFor="name">Telephone</label>
              <input type="tel" name="telephone" />
            </p>
            <p className="form-input">
              <label htmlFor="picture">Picture</label>
              <input type="file" name="picture" />
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </main>
        <footer>
          <p>Built with 🤘 in Bradenton, Florida.</p>
        </footer>
      </body>
    </>
  )
}
