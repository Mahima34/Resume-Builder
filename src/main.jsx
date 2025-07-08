import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import App from './App.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Header from './components/custom/Header.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const  router=createBrowserRouter([
  {
    element: <App/>,
    children:[
    {
      path: '/dashboard',
      element: <Dashboard />
    }
    ]
  },
  {
      path: '/',
      element: <Home />
    },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode><ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <RouterProvider router={router} />
  </ClerkProvider></React.StrictMode>,
)
