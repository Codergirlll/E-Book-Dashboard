import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClint = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClint}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
