import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import ini digunakan untuk React Router DOM
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/errorpage.jsx'
import ProductPage from './pages/products.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello, world!</div>,//element yang ingin dirender
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element: <RegisterPage />,
  },
  {
    path:"/product",
    element: <ProductPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
