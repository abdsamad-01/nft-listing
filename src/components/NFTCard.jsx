import React, { useState } from 'react'
import { nft_1 } from '../assets'
import Modal from './Modal';

const NFTCard = ({ nft }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    return (
        <div className='relative '>
            {/* {openModal && <div className='absolute top-0 bg-red-800 right-0 w-full h-full' />} */}

            <div
                className='text-gray-50 glass z-10 rounded-xl shadow-md relative lg:cursor-pointer h-[370px]'
                onClick={handleCardClick}
            >
                <img
                    src={nft.image}
                    alt={nft.id}
                    className='rounded-t-xl w-full h-[62%] object-cover'
                />
                <div className='flex flex-col p-2'>
                    <p className='text-lg font-semibold'> {nft.title} </p>
                    <span className='text-gray-400 text-xs'> By {nft.creator} </span>
                </div>

                <div className='flex flex-row items-center justify-between mt-4 p-2'>
                    <div className='flex flex-col'>
                        <span className='text-sm text-gray-400'> Current Bid </span>
                        <p className='text-base font-medium'> {`${nft.price} ETH`} </p>
                    </div>

                    <button
                        type='button'
                        className='px-5 text-[11px] py-2 font-medium text-white bg-bg-button rounded-md'
                        
                    > View </button>
                </div>
            </div>

            {showModal && <Modal nft={nft} onClose={() => setShowModal(false)} />}
        </div>

    )
}

export default NFTCard

