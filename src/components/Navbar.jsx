import React from 'react'
import { navLinks } from '../constants'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full bg-primary text-gray-50 lg:px-16 px-4 py-4 fixed top-0 z-40'>
            <div className='flex flex-row items-center justify-between'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link 
                        to='/'
                        className='flex flex-row gap-2 items-center cursor-pointer'
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                        <span className='text-base font-semibold'> Zomies </span>
                    </Link>
                </div>

                {/* Others */}
                <div className='flex-row items-center justify-between gap-20 mr-10 lg:flex hidden'>
                    <ul className='list-none inline'>
                        {navLinks.map(link => (
                            <li
                                className='px-6 inline font-normal text-[15px]'
                                key={link.id}
                            >
                                <a 
                                    className=''
                                    href={`${link.id}`}> { link.title } </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-6 ml-10'>
                        <p className='font-medium text-[15px]'> Login </p>
                        <button 
                            type='button'
                            className='px-7 text-[13px] py-2 font-medium text-white bg-bg-button rounded-md'
                        > Create </button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar

