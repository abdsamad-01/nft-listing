import React, { useState } from 'react'
import { Modal } from '../components'
import { BsArrowUpRightCircle, BsCollection } from 'react-icons/bs'
import { AiOutlineFilter } from 'react-icons/ai'
import { BiCategory, BiCategoryAlt } from 'react-icons/bi'
import { MdOutlineMonetizationOn } from 'react-icons/md'
import { NFTCard } from '../components'
import { nftCards } from '../constants'


const Listings = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
        console.log(openModal)
    }

    return (
        <div className='lg:px-16 px-4 md:pt-40 pt-28 text-gray-50 relative'>
            <div className='flex flex-col items-center justify-center lg:px-0 px-2 text-center'>
                <h2 className='md:text-5xl text-4xl font-semibold'> Trending Auctions Just For You </h2>
                <p className='text-base font-light mt-4 lg:[27%] w-full text-gray-100'> Collections of great aesthetic NFTs from Exclusivit, made and created with GustavoAI </p>

                <div 
                    className='bg-gray-50 mt-6 h-9 w-9 flex items-center cursor-pointer justify-center shadow-md rounded-full'
                    onClick={() => window.scrollTo(300, 300)}
                >
                    <BsArrowUpRightCircle className='w-6 h-6 object-contain text-gray-900' />
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-base font-medium'> Discover </h2>
                <div className='flex items-center justify-between md:mt-5 mt-3'>
                    <div className='sm:flex hidden flex-row sm:space-x-4'>
                        <div className='border border-gray-800 px-4 gap-2 flex flex-row items-center py-2 rounded-3xl cursor-pointer'>
                            <BiCategory className='w-[18px] h-[18px] object-contain' />
                            <p className='text-[13px] satoshi'> Category </p>
                        </div>
                        <div className='border border-gray-800 px-4 gap-2 flex flex-row items-center py-2 rounded-3xl cursor-pointer'>
                            <BsCollection className='w-[18px] h-[18px] object-contain' />
                            <p className='text-[13px] satoshi'> Collection </p>
                        </div>
                        <div className='border border-gray-800 px-4 gap-2 flex flex-row items-center py-2 rounded-3xl cursor-pointer'>
                            <MdOutlineMonetizationOn className='w-[18px] h-[18px] object-contain' />
                            <p className='text-[13px] satoshi'> Price Range </p>
                        </div>
                    </div>

                    <div className='border border-gray-800 px-4 gap-2 flex flex-row items-center py-2 rounded-3xl cursor-pointer'>
                        <AiOutlineFilter className='w-[18px] h-[18px] object-contain' />
                        <p className='text-[13px] satoshi'> Filter </p>
                    </div>
                </div>

            </div>

            {/* NFT Cards */}
            <div className='mt-8 lg:px-5 px-2 md:px-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 relative'>
                {nftCards.map(card => (
                    <NFTCard
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        title={card.title}
                        price={card.price}
                        creator={card.creator}
                        handleModal={handleModal}
                    />
                ))}
            </div>

            {openModal && <Modal />}
        </div>
    )
}

export default Listings

