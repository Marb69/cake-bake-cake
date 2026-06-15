import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './app/router'
import MainLayout from './components/layout/MainLayout'

const App = () => {
  return (
  
    
    
    <RouterProvider router={router} />
  )
}

export default App