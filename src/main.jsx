import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import {
  RouterProvider,
} from "react-router-dom";
import Route from './Routes/Route.jsx';
import Provider from './Provider/Provider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Route} />
    </Provider>

  </StrictMode>,
)
