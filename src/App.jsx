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
import { Toaster } from 'sonner';
import { createContext,useContext } from 'react';
const tab_article=createContext([]);
const tab_article_count=createContext([]);



function App() {
  const [tab,settab]=useState([]);

  return (
    <>

     <div id='details' className='bg-custom-gradient text-zinc-900 w-full min-h-svh'>
      <tab_article.Provider value={{tab,settab}}>
      <NavBar/>
      <Outlet/>
      </tab_article.Provider>
      <Toaster />
     </div>
    </>
  )
}

export {App,tab_article}
