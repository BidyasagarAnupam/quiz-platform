import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import QuizPage from './pages/QuizPage'

const App = () => {
  return (
    <div className='h-full bg-gradient-to-b from-blue-900 to-black text-white overflow-y-hidden'>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </div>
  )
}

export default App