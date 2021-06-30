import React, { useState } from 'react'
import logo from '../Images/Logo.png'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { getUser, authHeader, isLoggedIn, logout } from '../auth'

export function NewCourse() {
  const [newCourse, setNewCourse] = useState({
    name: '',
    description: '',
    address: '',
    website: '',
    photoURL: '',
  })
  const user = getUser()
  const [errorMessage, setErrorMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const history = useHistory()
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

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
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newCourse),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
    } else {
      if (response.ok) {
        history.push('/')
      } else {
        // Show errors!
        const json = await response.json()

        const errors = json.errors
        const messages = Object.values(errors)
        const errorMessageSentence = messages.join(' ')
        setErrorMessage(errorMessageSentence)
      }
    }
  }

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    setIsUploading(true)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.status === 200) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewCourse({ ...newCourse, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload
      setErrorMessage('Unable to upload image')
    }

    setIsUploading(false)
  }

  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
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
              {isLoggedIn() ? (
                <Link
                  to="/"
                  onClick={function () {
                    logout()
                    window.location.assign('/')
                  }}
                >
                  <li>Sign out</li>
                </Link>
              ) : null}
              {isLoggedIn() ? <li>Welcome, {user.fullName}</li> : null}
            </div>
          </nav>
        </header>
        <main className="main-sign">
          <h2>New Golf Course</h2>
          <form onSubmit={handleFormSubmit}>
            {errorMessage ? <p>{errorMessage}</p> : null}
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
                placeholder="Street Address, City, State"
                value={newCourse.address}
                onChange={handleStringFieldChange}
              ></textarea>
            </p>
            <p className="form-input">
              <label>Website</label>
              <input
                type="text"
                placeholder="URL"
                name="website"
                value={newCourse.website}
                onChange={handleStringFieldChange}
              />
            </p>
            {newCourse.photoURL ? (
              <p>
                <img alt="Golf Course" width={200} src={newCourse.photoURL} />
              </p>
            ) : null}

            <div className="file-drop-zone">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {dropZoneMessage}
              </div>
            </div>
            <p>
              <input type="submit" value="Submit" />
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
