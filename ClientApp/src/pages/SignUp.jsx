import React from 'react'
import logo from '../Images/Logo.png'

export function SignUp() {
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
        </footer>
      </body>
    </>
  )
}
