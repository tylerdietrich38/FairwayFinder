import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import { useHistory } from 'react-router'

export function NewCourse() {
  const [newCourse, setNewCourse] = useState({
    name: 'string',
    description: 'string',
    address: 'string',
    website: 'string',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedCourse = { ...newCourse, [fieldName]: value }

    setNewCourse(updatedCourse)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/GolfCourses', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newCourse),
    })

    if (response.code === 201) {
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
            <a href="/">
              <i className="menu"></i> Home | Golf Courses | About
            </a>
          </nav>
        </header>
        <main className="main-sign">
          <h2>New Golf Course</h2>
          <form onSubmit={handleFormSubmit}>
            <p className="form-input">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={newCourse.Name}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label>Description</label>
              <textarea
                name="description"
                value={newCourse.description}
                onChange={handleStringFieldChange}
              ></textarea>
              <span>Brief description</span>
            </p>
            <p className="form-input">
              <label>Address</label>
              <textarea
                name="address"
                value={newCourse.address}
                onChange={handleStringFieldChange}
              ></textarea>
            </p>
            <p className="form-input">
              <label>Website</label>
              <input
                type="tel"
                name="telephone"
                value={newCourse.website}
                onChange={handleStringFieldChange}
              />
            </p>
            <p className="form-input">
              <label>Picture</label>
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
