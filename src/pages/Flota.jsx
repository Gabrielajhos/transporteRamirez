import React from 'react'
import Camionetas from '../../img/flota.png'
import Camiones from '../../img/flotapesada.png'
import Electricos from '../../img/flotaElec.png'
import Furgoneta from '../../img/furgoneta.png'
import Repartidor from '../../img/repartidor.png'
import Entrega from '../../img/entrega-rapida.png'
import Montacargas from '../../img/montacargas.png'
import Volumen from '../../img/volumen.png'
import Receptor from '../../img/receptor.png'
import Hoja from '../../img/hoja.png'
import innovar from '../../img/innovar.png'
import Dolar from '../../img/dolar.png'
import Footer from '../components/Footer'


const Flota = () => {
  return (
    <>
<h1 className='text-6xl text-gray-600 text-center p-8 m-12'>Nuestros vehiculos</h1>
    <div>
    <div className='block mb:flex items-center mt-10'>  
    <img className='max-h-80' src={Camionetas} alt='Flota camionetas'/>
    <h2 className='text-5xl text-gray-600 font-bold'>Flota Camionetas</h2>
    </div>

    <div className='md:flex block mb:space-x-10 ml-4 mt-10'>

        <div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Vehículos en excelente estado, listos para entregas!</p> 
        <img className='m-auto' src={Furgoneta} alt="furgoneta icono"/></div>
   
        <div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Personal atento y de confianza!!</p> 
        <img className='m-auto' src={Repartidor} alt="Repartidor icono"/></div>

        <div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Entregas punto a punto!!</p> 
        <img className='m-auto' src={Entrega} alt="Repartidor icono"/></div>
    </div>
      
    </div>
    <div>
    <div className='block md:flex items-center mt-32'>
    <img className='max-h-80' src={Camiones} alt='Flota camiones'/>
    <h2 className='text-5xl text-gray-600 font-bold'>Flota Camiones</h2>
    </div> 

    <div className='md:flex block content-center md:space-x-10 ml-4 mt-10'>

<div className=' m-4  text-center text-2xl'> <p className='max-w-sm mb-4'>Capacidad para mercaderias y productos pesados!</p> 
<img className='m-auto' src={Montacargas} alt="Peso icono"/></div>

<div className=' m-4  text-center text-2xl'> <p className='max-w-sm mb-4'>Mayor capacidad de carga y volumen!!</p> 
<img className='m-auto' src={Volumen} alt="Repartidor icono"/></div>

<div className=' mb:m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Entregas última milla!!</p> 
<img className='m-auto' src={Receptor} alt="Repartidor icono"/></div>
</div>
    </div>

<div>
    <div className='block md:flex items-center mt-32'>
    <img className='max-h-80' src={Electricos} alt='Flota electrica'/>
    <div>
    <h2 className='text-3xl text-gray-600'>Proximamente!!!</h2>
    <h2 className='text-5xl text-gray-600 text-center font-bold'> Flota electrica</h2>
    </div> 
    </div>
    <div className='block md:flex md:space-x-10 ml-4 mt-10'>

<div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Tecnología sustentable y amigable con el medio ambiente!</p> 
<img className='m-auto' src={Hoja} alt="furgoneta icono"/></div>

<div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Innovación, progresos y avances!!</p> 
<img className='m-auto' src={innovar} alt="Repartidor icono"/></div>

<div className=' m-4 text-center text-2xl'> <p className='max-w-sm mb-4'>Mayor cuidado de costos  de nuestros servicios!!</p> 
<img className='m-auto' src={Dolar} alt="Repartidor icono"/></div>
</div>
    
</div>

<Footer/>
    </>
  )
}

export default Flota
