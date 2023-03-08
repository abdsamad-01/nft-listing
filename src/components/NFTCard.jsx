import React, { useState } from 'react'
import { nft_1 } from '../assets'
import Modal from './Modal';

const NFTCard = ({ key, id, image, title, price, creator }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='relative '>
            {/* {openModal && <div className='absolute top-0 bg-red-800 right-0 w-full h-full' />} */}
            
            <div
                className='text-gray-50 glass z-10 rounded-xl shadow-md relative cursor-pointer h-[350px]'
                key={key}
                onClick={() => setOpenModal(!openModal)}
            >
                <img
                    src={image}
                    alt={id}
                    className='rounded-t-xl w-full h-[60%] object-cover'
                />
                <div className='flex flex-col p-2'>
                    <p className='text-lg font-semibold'> {title} </p>
                    <span className='text-gray-400 text-xs'> By {creator} </span>
                </div>

                <div className='flex flex-row items-center justify-between mt-4 p-2'>
                    <div className='flex flex-col'>
                        <span className='text-xs text-gray-400'> Current Bid </span>
                        <p className='text-[15px] font-medium'> {`${price} ETH`} </p>
                    </div>

                    <button
                        type='button'
                        className='px-5 text-[11px] py-2 font-medium text-white bg-bg-button rounded-md'
                    > View </button>
                </div>
            </div>

            {/* {openModal && <Modal />} */}
        </div>

    )
}

export default NFTCard
