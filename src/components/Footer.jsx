import React from 'react'
import { Link } from 'react-router-dom';
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'

const Footer = () => {
  return (
    <div className='bg-gray-600 md:flex block items-center space-x-16 p-4'>

<div>
        <h1 className='text-4xl m-1 text-white font-bold' > Transporte Ramirez</h1>

        <h2 className='text-2xl text-white '>Nuestro compromiso en cada viaje</h2>
        </div>

        <div>
            
        </div>
        <Link className='text-white font-bold hover:cursor-pointer'>Terminos y condiciones</Link>
        <div className='flex space-x-4 m-auto'>
        <Link className='hover:cursor-pointer m-4'>
            <img src={Instagram} alt="logo instagram"/>
        </Link>

        <Link className='hover:cursor-pointer m-4'>
            <img src={Linkedin} alt="logo instagram"/>
        </Link>
        </div>
        </div>
  )
}

export default Footer
