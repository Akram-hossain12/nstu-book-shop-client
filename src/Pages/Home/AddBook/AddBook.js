import React from 'react';

import { useForm } from 'react-hook-form';
import NavTop from '../../Shared/Navbar/NavTop';
import { toast } from 'react-hot-toast';

const AddBook = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();



    const handleAddBook = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=e006788287386527d0d05164d3e0ddb5`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const booklist = {
                        name: data.name,
                        price: data.price,
                        image: imgData.data.url,
                        description: data.description,
                    }
                    console.log(booklist)
                    // save doctor information to the database
                    fetch('http://localhost:5000/booklist', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(booklist)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('New Book added successfully')
                            reset()
                        })
                }
            })
    }
    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                <NavTop></NavTop>
            </div>
            <div className='flex justify-center items-center'>

                <div className='w-96 p-7'>
                    <h2 className="text-4xl">Add A Book</h2>
                    <form onSubmit={handleSubmit(handleAddBook)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Buy Rate</span></label>
                            <input type="number" {...register("price", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", {
                                
                            })} className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Description</span></label>
                            <textarea type="text" {...register("description", {
                                required: true
                            })} className="textarea textarea-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Add Book" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;