import React from 'react'
import Almacen1 from '../../img/almacen1.jpg'
import Almacen2 from '../../img/almacen2.jpg'
import Footer from '../components/Footer'

const Nosotros = () => {
  return (
    <div>

    <section className='block md:flex '>
<img src={Almacen1} className="mb:w-1/2 w-full  mb:mt-12" alt="imagen fongo"/>
        <div className='p-3 m-6'>
            <h1 className='text-4xl font-semibold text-gray-600 text-center mb-4'>Nostoros</h1>
            <p className='text-2xl text-justify'>    Somos una empresa joven que ha estado creciendo potencialmente durante 6 años, asentando y 
            creando raices solidas. Hemos trabajado como socios transportistas  con empresas altamente reconocidas en el país. Desde nuestros inicios
            hemos trabajado con modalidad punto a punto y última milla; los atributos mas importantes para nosotros son la 
            responsabilidad, compromiso y flexibilidad. </p>
        </div>
    </section>


      <section className='block mb:flex'>
      <div className='p-3 m-6'>
        <h2 className='text-4xl font-semibold text-gray-600 text-center mb-4'> Mision y vision</h2>
        <p className='text-2xl text-justify'>Nuestra mision se basa en brindar un servicio de calidad, confiaza, sustentabilidad para garantizar
        la satisfacción y finalmente, fidelización de nuestros clientes.</p>
        <p className='text-2xl text-justify'>En cuanto a nuestra visión es crecer, innovar y evolucionar con las nuevas metodologías de logistica, brindando
        un servicio eficiente.</p>
        </div>

        <img src={Almacen2} className="md:w-1/2  md:mt-12" alt="imagen fongo"/>

      </section>
<Footer/>

    </div>
  )
}

export default Nosotros
