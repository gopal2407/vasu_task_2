import React from 'react'
import { NavLink } from 'react-router-dom'

function AppError() {
  return (
    <div className='container text-center'>
        <h1>Oops!!! The Resources you are looking for does not exists</h1>
        <NavLink className={'btn btn-outline-primary'} to={'/'}>Home</NavLink>
    </div>
  )
}

export default AppError