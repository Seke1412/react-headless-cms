import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Playground from './playground'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/playground"
          element={<Playground />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
