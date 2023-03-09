import React from 'react'

// const Modal = ({ openModal, handleModal}) => {
//     return (
//         <div className='bg-red-900 absolute top-0 right-0 w-full h-full z-30 text-gray-50 glass'>
//         <span onClick={() => handleModal()} className='right-0 top-4'> close </span>
//             Modal
//         </div>
//     )
// }

const Modal = ({ nft, onClose }) => {
    return (
        <div className="bg-red-900 absolute top-0 right-0 w-full h-full z-30 text-gray-50 glass">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <img src={nft.image} alt={nft.title} />
                <h3>{nft.title}</h3>
                <p>Description: {nft.description}</p>
                <p>Owned by: {nft.creator}</p>
            </div>
        </div>
    );
};


export default Modal

