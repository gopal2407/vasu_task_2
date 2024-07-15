import React from 'react'
import { NavLink } from 'react-router-dom'
import Task from './Task'

function Home() {
  return (
    <div>
        <h1>Vasundhara Home Page</h1>
        <h2>Welocme Here</h2>
        <NavLink to='task'>Go to Vasundhara Task</NavLink>
    </div>
  )
}

export default Home