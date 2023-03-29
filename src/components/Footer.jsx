import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-600 flex items-center space-x-16 p-4'>

<div className=''>
        <h1 className='text-4xl m-1 text-white font-bold' > Transporte Ramirez</h1>

        <h2 className='text-2xl text-white '>Nuestro compromiso en cada viaje</h2>
        </div>

        <div>
            
        </div>
        <Link className='text-white font-bold hover:cursor-pointer'>Terminos y condiciones</Link>
        <Link className='hover:cursor-pointer'>
            <img src='../../img/instagram.png' alt="logo instagram"/>
        </Link>

        <Link className='hover:cursor-pointer'>
            <img src='../../img/linkedin.png' alt="logo instagram"/>
        </Link>
      
        </div>
  )
}

export default Footer
