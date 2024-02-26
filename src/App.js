import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const ListPage = lazy(() => import('./pages/ListPage/index'));
const ViewPage = lazy(() => import('./pages/ViewPage/index'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={'loading...'}>
          <Routes>
            <Route path="/" element={<ListPage />} exact />
            <Route path="/view/:id" element={<ViewPage />} exact />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
