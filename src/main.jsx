import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Playground from './playground'

import PreviewSample from './pages/preview-sample'

import Home from './pages/home'
import SampleCreate from './pages/sample/create'
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
          <Route path="sample">
            <Route 
              index
              element={<Sample/>}
            />
            <Route
              path="create"
              element={<SampleCreate />}
            />
          </Route>
          <Route
            path="preview-sample"
            element={<PreviewSample />}
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
