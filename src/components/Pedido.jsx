"use client"
import React, { useState } from 'react'
import MesageButon from './MesageButon'


function Pedido({category, categoryFilter, title, price}) {
    const [categoriaSelect, setCategoriaSelect] = useState(category ? category : categoryFilter ?  'gorros': '')
    const [cantidad, setCantidad] = useState('desconocida')
    const [talla, setTalla] = useState('desconocida')
    const [name, setName] = useState('Anonimo')
    const [lugar, setLugar] = useState('desconodido')

    const handleCantidad = (event) => {
        setCantidad(event.target.value)
    }
    const handleTalla = (event) => {
        setTalla(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleDom = (event) => {
        setLugar(event.target.value)
    }
    return (
        <div className='flex flex-col'>
            <h5 className='font-semibold text-center lg:text-start'>Realizar Pedido:</h5>
            <h5 className=' text-center duration-200 hover:scale-110 text-2xl lg:text-start'>Precio:<span className='font-bold  '> s/325</span></h5>
            <div className='pb-3 lg:justify-start  justify-center items-center  flex gap-2'>
              
                <div className='flex mt-5 flex-col w-max gap-2'>
                    <label htmlFor="" className='text-center duration-200 hover:scale-110'>Talla:</label>
                    <input type="number" min={35} max={45}  name="" onChange={handleDom}  className='w-[160px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' placeholder='Ingresa la talla'  id="" />
                </div>
            </div>
            <div className='pb-3  flex gap-2'>
                <div className='flex flex-col w-max gap-2'>
                    <label htmlFor="" className='pl-5 duration-200 hover:scale-110'>A nombre de:</label>
                    <input onChange={handleName} className='w-[160px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' type="text" name="" placeholder='Nombre..' id="" />
                </div>
                <div className='flex flex-col w-max gap-2'>
                    <label htmlFor="" className='text-center duration-200 hover:scale-110'>Al Lugar:</label>
                    <input type="text" name="" onChange={handleDom}  className='w-[160px] py-2 outline-none px-0 bg-gray-300 pl-4 placeholder-gray-600 rounded-md flex  ' placeholder='Domicilio' id="" />
                </div>
            </div>
            <MesageButon 
            /*url={
                category === 'polos' || category === 'poleras' ? `https://wa.me/51969721673?text=Hola%2C%20Made%20in%20Caman%C3%A1%2C%20vengo%20desde%20tu%20pagina%20web%20a%20realizar%20el%20siguiente%20pedido%3A%20%0ACategoria%3A%20${categoriaSelect}%2C%0ANombre%3A%20${title}%2C%0ATalla%3A%20${talla}%2C%0ACantidad%3A%20${cantidad}%2C%0AAl%20domicilio%3A%20${lugar}%2C%0AA%20nombre%20de%3A%20${name}%0AEspero%20su%20respuesta%20con%20ansias.`

               // Gorros, pareos, sombreros. bolsos

                : `https://wa.me/51969721673?text=Hola%2C%20Made%20in%20Caman%C3%A1%2C%20vengo%20desde%20tu%20pagina%20web%20a%20realizar%20el%20siguiente%20pedido%3A%20%0ACategoria%3A%20${categoriaSelect}%2C%0ANombre%3A%20${title}%2C%0ACantidad%3A%20${cantidad}%2C%0APrecio%3A%20s%2F%20${price}%2C%0ACantidad%20a%20pagar%3A%20s%2F%20${price * cantidad}%0AAl%20domicilio%3A%20${lugar}%2C%0AA%20nombre%20de%3A%20${name}%0AEspero%20su%20respuesta%20con%20ansias.`
            } */ 
            />

        </div>
    )
}

export default Pedido
