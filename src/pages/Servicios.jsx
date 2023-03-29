import React from 'react'
import Footer from '../components/Footer'

const Servicios = () => {

  return (

    <>

    <section>
        <h1 className='text-5xl text-gray-600 font-bold text-center m-10'>Servicios</h1>

        <div className='flex text-3xl text-red-600 m-auto space-x-5 mb-20 '>
            <a className='hover:text-gray-600  hover:cursor-pointer' >Punto a punto</a>
            <a className='hover:text-gray-600 hover:cursor-pointer'>última Milla</a>
        </div>
    </section>
    <section>
        <h2 className='text-5xl font-bold text-red-600 text-center mb-10'> última Milla</h2>
        <h2 className='text-4xl text-gray-600 text-center mb-20'>Trabaja con nuestro equipo tu servicio de última milla </h2>

        <div>

        <div className='flex mb-20 ml-10'>
        <img className='w-1/3 mr-0' src='../../img/imagen9.png' alt='imagen ultima milla'/>
            <div className='p-4' >
                <h3 className='text-3xl font-bold text-gray-600 text-center mb-3'>última milla- Cross Docking</h3>
                <ul className='text-2xl text-start'>
                    <li>Retiramos o recepcionamos tus productos en nuestro Centro de Distribución</li>
                    <li>Proveemos sistemas de ruteo propio o nos adaptamos a tus procesos y tecnología.</li>
                    <li>Cargamos tus productos en los vehículos más idóneos, buscando aportar la mayor eficiencia según el tipo de mercancía a transportar.</li>
                    
                </ul>
            </div>
        </div>

        <div className='flex ml-10 mb-32'>
            <div className='p-4'>
                <h3 className='text-3xl font-bold text-gray-600 text-center'>última milla- Despacho Directo o Exclusivo</h3>
                <p className='text-2xl  text-gray-600 text-center mb-3'>Transportamos tus productos desde tu centro de distribución</p>
                <ul className='text-2xl text-start'>

                    <li>Disponibilizamos supervisores en terreno.</li>
                    <li>Proveemos sistemas de ruteo propio o nos adaptamos a tus procesos y tecnología.</li>
                    <li>Ponemos nuestros vehículos a tu disposición.</li>
                    
                </ul>
            </div>
            <img className='w-1/3 mr-10' src='../../img/imagen8.png' alt='imagen ultima milla'/>

        </div>



        </div>
    </section>

    <section >
    <h2 className='text-5xl font-bold text-red-600 text-center mb-20'> Punto a Punto</h2>
    <p className='text-4xl text-gray-600 text-center mb-16'>Establecemos un sistema optimizado de entrega que te permitirá brindar un servicio más eficiente.</p>
  
   <div className='flex'>
   <img className='w-1/3 ml-10' src='../../img/imagen7.png' alt='imagen ultima milla'/>

        <div className='p-4'>
                <h3 className='text-3xl font-bold text-gray-600 text-center'>Punto a punto</h3>
                <ul className='text-2xl text-start'>

                    <li>Activación</li>
                    <li>LLegada a bodega del cliente.</li>
                    <li>Rendición del viaje.</li>
                    <li>Cierre del viaje.</li>
                    <li>llegada a destino</li>
                    
                </ul>
        </div>
   </div> 

    </section>

<Footer/>
      
    </>
  )
}

export default Servicios
