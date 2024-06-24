import React from 'react'
import Image from 'next/image'
import MesageButon from './MesageButon'
import Pedido from './Pedido'

function CardProduct({ id, img, title, price, category, categoryFilter,  tallas }) {
    return (
        <div className={`flex my-5 flex-col justify-around lg:flex-row ${categoryFilter === 'gorros' ? 'lg:mt-24': ''}`}>
            {/* <h4>{id}</h4> */}
           {categoryFilter === 'gorros'? (
             <div className='w-[80%] lg:w-[100%] md:w-[70%] flex flex-col xl:w-[40%] mx-auto'>
             <Image
                 className='flex mx-auto'
                 width={350}
                 height={350}
                 src={img}
                 alt=''
             />
             <h3 className='text-2xl text-center'>{title}</h3>
         </div>
           ): (
             <div className='w-[80%] lg:w-[100%] md:w-[70%] flex flex-col xl:w-[40%] '>
                <Image
                    className='flex mx-auto'
                    width={600}
                    height={600}
                    src={img}
                    alt=''
                />
                <h3 className='text-2xl text-center'>{title}</h3>
            </div>
           )}
            <div className='flex justify-center items-center lg:items-start flex-col gap-3 -ml-10 pl-0'>
                <h3 className=' text-2xl font-light text-center lg:text-start'>Categoria: <span className='font-bold capitalize'>{categoryFilter === 'gorros' ? categoryFilter: category}</span></h3>
                <h1 className='w-[80%] xl:w-[80%] text-center lg:text-start font-medium text-5xl'>Adidas X Speed Portal</h1>
                {/* <img src={img} /> */}
                {/* <h3 className='py-3'>{price}</h3> */}
             
                <Pedido title={title} price={price} category={category} categoryFilter={categoryFilter} />
            </div>
        </div>
    )
}

export default CardProduct