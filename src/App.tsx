import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './pages/calculator'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App