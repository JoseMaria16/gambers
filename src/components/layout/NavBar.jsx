"use client"
import Link from 'next/link'
import React, {useState} from 'react'

function NavBar({open, setOpen}) {
    
    return (
        <nav className={`fixed  -left-[1000px] h-screen lg:h-max w-1/2 lg:sticky top-0 z-10 lg:w-full border-b-2 bg-white border-gray-300 pt-5 mb-5 pb-4`}>
            <ul className='flex flex-col lg:flex-row lg:justify-between px-10 gap-5 lg:items-center'>
                <div className='bg-black w-5 h-5 rounded-full'></div>

                <li>
                    <Link href={'/'}>INICIO</Link>
                </li>

                <li>
                    <Link href={'/seccion/chimpunes'}>CHIMPUNES</Link>
                </li>
                <li>
                    <Link href={'/seccion/choteras'}>CHOTERAS</Link>
                </li>
                <li>
                    <Link href={'/seccion/gorros'}>LOZA</Link>
                </li>
                <li>
                    <Link href={'/seccion/sombreros-pareos-bolsos'}>ACCESSORIOS</Link>
                </li>
                <li>
                    <Link href={'/seccion/contacto'}>VISÍTANOS</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar