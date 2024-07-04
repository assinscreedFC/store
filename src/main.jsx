import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "store/",
    element: <App/>,
    children:[
      {
        path: "shop",
        element: <Shop/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
