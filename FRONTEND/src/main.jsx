import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import App from './App'
import Predict from './routes/Predict'
import Error from './routes/Error'
import Login from './routes/Login'
import About from './routes/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/predict",
        element: <Predict />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)