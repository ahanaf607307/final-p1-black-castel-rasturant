import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './Routes/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='max-w-7xl mx-auto'>
<RouterProvider router={routes}/>
</div>
  </StrictMode>,
)
