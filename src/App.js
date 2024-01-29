import React, { useState } from 'react'
import Login from './components/Login'
import Upload from './components/Upload'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setLoggedIn(true)
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Upload loggedIn={loggedIn} />} />
      </Routes>
    </div>
  )
}

export default App
