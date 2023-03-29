import React from 'react'
import Footer from '../components/Footer'

const Contactanos = () => {
  return (
    <>
    <section className='contacto'>
    <h1 className='mb-32 mb:text-5xl text-4xl text-red-600 max-w-3xl text-center font-bold m-auto'>Contactanos por cualquiera de nuestros medios oficiales</h1>

<div className='block mb:flex'>
<div>
    <h2 className='text-white text-4xl '>Comunicate con nosotros para conocer mas sobre nuestros servicios.</h2>

    <h2 className='text-white text-4xl mt-8 '>Te responderemos a la brevedad posible!!!</h2>

</div>

    <form className='grid-cols-2 gap-2 p-4'>

    <fieldset>
        <input className='p-4 rounded-sm m-2 font-bold' placeholder='Nombre' name='nombre' id='nombre'/>
        <input className='p-4 rounded-sm m-2 font-bold' placeholder='Email' name='email' id='email'/>
        <input className='p-4 rounded-sm m-2 font-bold' placeholder='Telefono' name='telefono' id='telefono'/>
        <input className='p-4 rounded-sm m-2 font-bold' placeholder='Empresa' name='empresa' id='empresa'/>
    </fieldset>
    <fieldset>
        <textarea className='w-10/12 rounded-sm m-2 font-bold text-gray-400 h-24' name='descripcion' id='descripcion'>Comentanos tu consulta!</textarea>
    </fieldset>
    <input className='bg-red-600 text-white p-3 font-bold' type='submit' value='Enviar'/>

    </form>
    </div>
    </section>   
    <Footer/>
    </>
  )
}

export default Contactanos
