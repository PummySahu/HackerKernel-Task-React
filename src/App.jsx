import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App