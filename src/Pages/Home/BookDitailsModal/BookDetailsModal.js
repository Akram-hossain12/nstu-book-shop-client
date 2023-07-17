
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookDetailsModal = ({ book }) => {
    const { name, price, description } = book;
    console.log(book)

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <div className="form-control w-full max-w-xs">
                        <label className="label ">
                            <span className="label-text text-xl">Book Name:</span>
                        </label>
                        
                        <h3 className="text-2xl font-bold"> {name}</h3>
                    </div>
                    <div className="divider divider-vertical"></div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Buy Rate :</span>
                        </label>
                      
                        <h3 className="text-2xl font-bold flex ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            {price} /=</h3>
                    </div>
                    <div className="divider divider-vertical"></div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl">Description :</span>
                        </label>
                      
                        <h3 className="text-2xl font-bold flex ml-2">
                            {description} </h3>
                    </div>


                    <p> {}</p>
                </div>
            </div>
        </>
    );
};

export default BookDetailsModal;