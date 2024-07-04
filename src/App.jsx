import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";



function App() {


  return (
    <>

     <div id='details'>     <NavLink to="Shop" >click</NavLink>
      <Outlet/>
     </div>
    </>
  )
}

export default App
