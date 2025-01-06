import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Firebase/AuthProvider'
import './index.css'
import routes from './Routes/Routes'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<QueryClientProvider client={queryClient}>
<HelmetProvider>
<div className='max-w-7xl mx-auto '>
<RouterProvider router={routes}/>
</div>
</HelmetProvider>
</QueryClientProvider>
</AuthProvider>
  </StrictMode>,
)
