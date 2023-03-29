import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import Logo from '../../img/logo.jpeg'

const Header = () => {
  return (
    <>

    <div className='bg-red-600 p-2'>
    <input className='p-2 ' type='text' placeholder="¿Buscas ayuda?"/>
    </div>

    <div className='flex items-center space-x-48 m-auto'>

<a href='/inicio'>
        <img className=' w-72 md:w-full ml-12' src={Logo} alt="Logo inicio"/>
</a>
        <div className=''>
        <h1 className=' md:text-6xl m-1 font-bold hidden md:flex' > Transporte Ramirez</h1>

        <h2 className='text-3xl text-center hidden md:flex'>Nuestro compromiso en cada viaje</h2>
        </div>

    </div>

    <nav className='bg-gray-600 md:space-x-48 p-8 text-center shadow-md items-center font-bold text-white block md:flex'>
    <Link to='/inicio' className='hover:scale-110 block'>Inicio</Link>
    <Link to='/nosotros' className='hover:scale-110 block'>Nosotros</Link>
    <Link to='/servicios'  className='hover:scale-110 block'>Nuestros Servicios</Link>
    <Link to='/flota' className='hover:scale-110 block'>Flota</Link>
    <Link to='/contactanos' className='hover:scale-110 block'>Contacto</Link>

    </nav>

    <Outlet/>
    
    </>
  )
}

export default Header

