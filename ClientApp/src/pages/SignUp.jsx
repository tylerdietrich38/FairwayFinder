import React from 'react'
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'

export function SignUp() {
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
          <nav>
            <a href="/">
              <i className="fa fa-home"></i>
            </a>
            <h2>Sign In</h2>
            <form action="#">
              <p className="form-input">
                <label htmlFor="name">Username</label>
                <input type="text" name="name" />
              </p>
              <p className="form-input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
            </form>
            <h2 className="sign-up">Sign Up</h2>
          </nav>
          <form action="#">
            <p className="form-input">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" />
            </p>
            <p className="form-input">
              <label htmlFor="name">Username</label>
              <input type="text" name="name" />
            </p>
            <p className="form-input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </p>
            <p>
              <input type="submit" value="Sign Up" />
            </p>
          </form>
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
