import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { zomies, account, community, resources } from '../constants';

const Footer = () => {
    return (
        <div className='py-10 flex lg:flex-row flex-col gap-28 items-start justify-start lg:px-16 px-4 w-full'>
            <div className='lg:w-1/4 w-full'>
                <div className='flex flex-col'>
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
                    <p className='text-gray-300 font-normal text-sm my-6'> Enter you email to get notified by Zomies for latest updates </p>
                    <div className='flex flex-row items-center justify-between border border-gray-600 p-1 rounded-md glass'>
                        <input
                            type='email'
                            className='bg-transparent focus:outline-none text-gray-400 text-[13px] w-[85%]'
                            placeholder='Enter your email address'
                        />
                        <button
                            type='button'
                            className='text-base flex items-center justify-center font-semibold bg-bg-button w-7 h-7 rounded-full text-gray-50'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-2  gap-3 lg:w-3/4 w-full'>
                <div>
                    <p className='text-gray-300 text-base font-medium'> Zomies </p>
                    <ul className='mt-4 list-none'>
                        {zomies.map((link, idx) => <li
                            key={idx}
                            className='text-gray-400 text-sm cursor-pointer my-3'
                        >
                            {link}
                        </li>)}
                    </ul>
                </div>

                <div>
                    <p className='text-gray-300 text-base font-medium'> My Account </p>
                    <ul className='mt-4 list-none'>
                        {account.map((link, idx) => <li
                            key={idx}
                            className='text-gray-400 text-sm cursor-pointer my-3'
                        >
                            {link}
                        </li>)}
                    </ul>
                </div>

                <div>
                    <p className='text-gray-300 text-base font-medium'> Resources </p>
                    <ul className='mt-4 list-none'>
                        {resources.map((link, idx) => <li
                            key={idx}
                            className='text-gray-400 text-sm cursor-pointer my-3'
                        >
                            {link}
                        </li>)}
                    </ul>
                </div>

                <div>
                    <p className='text-gray-300 text-base font-medium'> Community </p>
                    <ul className='mt-4 list-none'>
                        {community.map((link, idx) => <li
                            key={idx}
                            className='text-gray-400 text-sm cursor-pointer my-3'
                        >
                            {link}
                        </li>)}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Footer

