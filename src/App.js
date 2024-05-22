import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Hero'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App