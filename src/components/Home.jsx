import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-hero-pattern bg-no-repeat bg-cover px-16 relative'>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-white font-extrabold text-8xl text-center'> Home Page </h1>
                    <button
                        type='button'
                        className='text-sm py-2 px-7 font-medium text-white bg-bg-button rounded-md mt-5'
                        onClick={() => {
                            navigate('/listings')
                        }}
                    > View NFTs </button>
                </div>
            </div>
        </div>
    )
}

export default Home

 