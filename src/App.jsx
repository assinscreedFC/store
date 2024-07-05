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
import NavBar from "./components/NavBar.jsx"



function App() {


  return (
    <>

     <div id='details' className='bg-black text-zinc-900 w-full min-h-svh'>
      <NavBar/>
      <Outlet/>
     </div>
    </>
  )
}

export default App
