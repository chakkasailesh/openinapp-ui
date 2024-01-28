import React from 'react'
import Login from './components/Login'
import Upload from './components/Upload'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App
