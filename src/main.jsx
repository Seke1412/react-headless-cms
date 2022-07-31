import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Playground from './playground'

import Home from './pages/home'
import Sample from './pages/sample'
import NotFound from './pages/404'

import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="sample"
            element={<Sample />}
          />
          <Route
            path="playground"
            element={<Playground />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
