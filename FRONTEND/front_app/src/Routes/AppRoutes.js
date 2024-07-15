import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Task from '../components/Task'
import { AppError } from '../components'
import Task1 from '../components/Task1'

function AppRoutes() {
  return (
    <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='task' element={<Task/>}/>
            <Route path='/*' element={<AppError/>}/>
            <Route path='task1' element={<Task1/>}/>
    </Routes>
  )
}

export default AppRoutes