import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import App from './App.jsx'

const  router=createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
