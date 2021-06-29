import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { recordAuthentication } from '../auth'
import { isLoggedIn } from './auth'

export function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      // TODO, record the login
      // recordAuthentication(apiResponse)
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }

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
              {isLoggedIn() ? null : (
                <Link to="/signin">
                  <li>Sign In/Sign Up</li>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <nav>
            <a href="/">
              <i className="fa fa-home"></i>
            </a>
            <h2>Sign In</h2>
            <form onSubmit={handleFormSubmit}>
              {errorMessage ? <p>{errorMessage}</p> : null}
              <p className="form-input">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleStringFieldChange}
                />
              </p>
              <p className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleStringFieldChange}
                />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
            </form>
            <h2 className="sign-up">Sign Up</h2>
          </nav>
          <form onSubmit={handleFormSubmit}>
            {errorMessage ? <p>{errorMessage}</p> : null}
            <p className="form-input">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                value={newUser.fullName}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleStringFieldChange}
              />
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
