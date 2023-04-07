import React from 'react'
import Imagen1 from '../../img/imagen1.png'
import Imagen2 from '../../img/imagen2.png'
import Imagen4 from '../../img/imagen4.jpg'
import Imagen5 from '../../img/imagen5.jpg'
import Cajas from '../../img/cajas.png'
import Innovacion from '../../img/innovacion.png'
import Compromiso from '../../img/compromiso.png'
import Flexibilidad from '../../img/giro.png'
import Exp from '../../img/experiencia.png'
import Paquete from '../../img/paquete.png'
import Camion from '../../img/enviado.png'
import Elevador from '../../img/elevador.png'
import Bodega from '../../img/almacen.png'
import Prisa from '../../img/prisa.jpg'
import Llego from '../../img/llego.jpg'
import Falabella from '../../img/falabella.jpg'
import Intercarry from '../../img/intercarry.jpg'
import Loginsa from '../../img/loginsa.jpg'
import Ikea from '../../img/ikea.jpg'
import Footer from '../components/Footer'

const Inicio = () => {
  return (
    <div>
    <div
  id="carouselExampleSlidesOnly"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={Imagen1}
        className="block w-full"
        alt="Wild Landscape" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={Imagen2}
        className="block w-full"
        alt="Camera" />
    </div>
  
  </div>
</div>
<div className='bg-gray-600 text-white font-bold p-4 '>
    <h2 className='md:text-4xl  text-center m-4 p-6'>Queremos ser parte de tu equipo!</h2>
    <div className=' md:space-x-48 space-x-6 m-4 flex'>

    <img className='md:w-full w-10' src={Paquete} alt="logocarrucha"/>
    <img className='md:w-full w-10' src={Camion} alt="logocamion"/>
    <img className='md:w-full w-10' src={Cajas} alt="logocaja"/>
    <img className='md:w-full w-10' src={Bodega} alt="logobodega"/>
    <img className='md:w-full w-10' src={Elevador} alt="logomontacargas"/>
    </div>
</div>


<div className='p-10'>

<div className='md:flex block text-center items-center'>

<img className='md:w-1/2 w-full md:m-8 delay-75' src={Imagen4} alt="Imagen paqueteria2"/>

<div>
    <h2 className='text-4xl mb-7 text-gray-600'> Sistema Punto a punto</h2>
    <p className='text-2xl'>Brindamos servicio de distribucion y abastecimiento para tiendas, empresas, bodegas, etc.  </p>
</div>

</div>

<div className='md:flex block text-center items-center'>

<div>
    <h2 className='text-4xl mb-7 text-gray-600'>Proceso última milla</h2>
    <p className='text-2xl'>En nuestro servicio última milla, nos comprometemos a el cliente final. Disponemos de organizacion y 
    recursos para que el servicio sea lo más eficiente posible. Proporcionamos flexibilidad y comodidad en nuestras entregas.</p>
</div>
    <img className='md:w-1/2 w-full md:m-8' src={Imagen5} alt="Imagen paqueteria"/>
</div>
</div>

<section>
<h2 className='text-5xl mb-7 text-gray-600 text-center font-bold '>¿Porque trabajar con nosotros?</h2>

<div className='md:flex block p-4'>
<div className='text-center mr-6'>
    <h3 className='text-2xl text-gray-600 mb-2 text-center font-bold'>Logística flexible</h3>
    <img className='m-auto' src={Flexibilidad} alt="Flexibilidad"/>
    <p className='text-justify'>Entendemos que cada cliente es diferente, entendemos que sus necesidades tambien lo son
    y trabajamos para brindar soluciones que necesita.</p>
</div>

<div className='text-center mr-6'>
    <h3 className='text-2xl text-gray-600 mb-2 text-center font-bold'>Experiencia</h3>
    <img className='m-auto' src={Exp} alt="Experiencia"/>
    <p className='text-justify'>Nuestra empresa lleva 6 años expandiendose en el mercado, Nos sentimos orgullosos de nuestra capacidad y calidad. </p>
</div>

<div className='text-center mr-6'>
    <h3 className='text-2xl text-gray-600 mb-2 text-center font-bold'>Compromiso</h3>
    <img className='m-auto' src={Compromiso} alt="compromiso"/>
    <p className='text-justify'>Tener un excelente cumpliemnto con el cliente es muy importante para nosotros, nos eforzamos para brindar puntualidad, eficiencia y compromiso</p>
</div>

<div className='text-center mr-4'>
    <h3 className='text-2xl text-gray-600 mb-2 text-center font-bold'>Innovación</h3>
    <img className='m-auto' src={Innovacion} alt="Innovacion"/>
    <p className='text-justify'>Buscamos avanzar e innovar junto al mundo, brindar los mejores metodos y tecnología es importante para nosotros. </p>
</div>
</div>
</section>

<section className='proximamente md:block  hidden'>

    <h2 className=' text-red-600 md:text-6xl text-4xl font-bold '>Proximamente </h2>
    <h3 className='md:text-5xl text-3xl text-white'>Nueva linea de vehículos electricos</h3>
    <p className='text-2xl text-white'> Reducción de emisiones, costes, amigable con el medio ambiente y más...</p>
</section>
<section>
    <h2 className='text-4xl text-gray-600 text-center p-8 m-5 '>Nuestros clientes</h2>

    <div className='md:flex block md:space-x-10 items-center m-auto'>
      <img className='w-44 md:m-4 m-auto' src={Llego} alt="empresas"/>
      <img className='w-44 md:m-4 m-auto' src={Prisa} alt="empresas"/>
      <img className='w-44 md:m-4 m-auto' src={Falabella} alt="empresas"/>
      <img className='w-44 md:m-4 m-auto' src={Ikea} alt="empresas"/>
      <img className='w-44 md:m-4 m-auto' src={Loginsa} alt="empresas"/>
      <img className='w-44 md:m-4 m-auto' src={Intercarry} alt="empresas"/>
    
    </div>
</section>

<Footer/>
      
    </div>
  )
}

export default Inicio
