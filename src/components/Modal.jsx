import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';


const Modal = ({ nft, onClose }) => {
    return (
        <div className="fixed bottom-0 lg:top-[35%] top-[20%] flex md:flex-row lg:mx-auto left-0 right-0 h-fit flex-col gap-3 bg-primary rounded-md lg:h-[40vh] lg:pb-0 pb-4  lg:w-[550px] w-full shadow-sm items-center justify-center z-50 text-gray-50">
            <MdClose className='absolute cursor-pointer top-2 right-5 w-5 h-5 object-contain' onClick={onClose} />
            <div className='lg:w-1/2 w-full lg:h-full'>
                <img className='lg:h-full rounded-t-md rounded-b-md w-full object-cover' src={nft.image} alt={nft.title} />
            </div>

            <div className='lg:w-1/2 w-full px-4'>
                <h3 className='text-[17px] pb-2 font-medium'>{nft.title}</h3>
                <p className='text-[13px] font-normal '>{nft.description}</p>
                <p className='text-xs text-gray-400 py-3'>Owned by: {nft.creator}</p>

                <Link to='https://opensea.io/'>
                    <button
                        type='button'
                        className='px-5 text-[11px] py-2 mt-4 font-medium text-white bg-bg-button rounded-md'
                    > Place Bid </button>
                </Link>
            </div>
        </div>

    );
};


export default Modal

