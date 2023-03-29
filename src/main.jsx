import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Flota from './pages/Flota'
import Servicios from './pages/Servicios'
import Contactanos from './pages/Contactanos'


const router = createBrowserRouter([
{
  path: '/',
  element: <Header/>,
  children: [
{
  index: true,
  path:'/inicio',
  element: <Inicio />
},
{
  path: '/nosotros',
  element : <Nosotros/>
},
{
  path: '/flota',
  element: <Flota/>
},
{
  path: '/servicios',
  element: <Servicios/>
},
{
  path: '/contactanos',
  element: <Contactanos/>
}


  ]
},



])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
