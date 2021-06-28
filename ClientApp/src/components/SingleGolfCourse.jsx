import React from 'react'
import { Link } from 'react-router-dom'
import { GolfCourse } from '../pages/GolfCourse'

export function SingleGolfCourse({ GolfCourse }) {
  return (
    <li>
      <h2>
        <Link to={`/GolfCourses/${GolfCourse.id}`}>{GolfCourse.name}</Link>
      </h2>
      <address>{GolfCourse.address}</address>
    </li>
  )
}
