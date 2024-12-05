import React from 'react'
import Home from './pages/Home'
import Settings from './pages/Settings'
import About from './pages/About'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/about' exact element={<About />}></Route>
      <Route path='/settings' exact element={<Settings />}></Route>
   
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
