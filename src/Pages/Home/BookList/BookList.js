import React, { useState } from 'react';
import NavTop from '../../Shared/Navbar/NavTop';
import { useQuery } from '@tanstack/react-query';
import BookDetailsModal from '../BookDitailsModal/BookDetailsModal';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const BookList = () => {
    const [book,setBook]=useState(null)
    const [search,setSearch]=useState('')
    const [deletingBooks, setDeletingBooks] = useState(null);

    const closeModal = () => {
        setDeletingBooks(null);
    }
   
    const url = 'http://localhost:5000/booklist';


    const { data: booklist = [] ,refetch} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }
    })
    const handleDeleteBook = bookslist => {
        fetch(`http://localhost:5000/booklist/${bookslist._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Book ${booklist.name} deleted successfully`)
            }
        })
    }
   
    return (
    
        <div>
            <div className='flex justify-center items-center'>
                <NavTop></NavTop>
            </div>
            <div className='flex justify-center items-center mt-8 mb-8'>
                <input onChange={e=>setSearch(e.target.value)} type="text"  placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button  className='btn'>Search</button>
            </div>


            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Book No</th>
                                <th>Book Name</th>

                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {booklist.filter((item,)=>{
                                return search.toLowerCase()===''?item : item.name.toLowerCase().includes(search)
                            }).map((books,i) => <tr key={books._id}>

                                <td>{i+1}</td>
                                <td className='text-2xl'>
                                    <label onClick={()=>setBook(books)} htmlFor="booking-modal" >{books.name}</label>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Edit</button>
                                </td>
                                <td>
                                    <label onClick={() => setDeletingBooks(books)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
              { book&& <BookDetailsModal
                    
                    book={book}
                ></BookDetailsModal>}
                {
                deletingBooks && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBooks.name}. It cannot be undone.`}
                    successAction = {handleDeleteBook}
                    successButtonName="Delete"
                    modalData = {deletingBooks}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
            </div>

        </div>

    );
};

export default BookList;