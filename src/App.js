import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ListPage from './pages/ListPage/index'
import ViewPage from './pages/ViewPage/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} exact />
          <Route path="/view/:id" element={<ViewPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
