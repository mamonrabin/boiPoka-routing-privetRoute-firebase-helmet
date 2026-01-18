import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToWishListInLocalStorage } from '../../../Utlity/AddToLocalStorage';

const BookDetails = () => {
    const [wishBooks, setWishBooks] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    const bookDetails = data.find(book => book.bookId === parseInt(id));
    console.log(bookDetails);

    

    const handleAddWishList = (book) => {
        const isExist = wishBooks.find(wishBook => wishBook.bookId === book.bookId);
        if(!isExist){
const newWishList = [...wishBooks, book];
        setWishBooks(newWishList);

        addToWishListInLocalStorage(book);
        }
        else{
            alert("This book is already in your wishlist");
        }
        
        
    }
    console.log("data",wishBooks);
    return (
        <div className='py-10'>
            <h2 className='text-center text-3xl font-bold py-10'>Book Details Page</h2>
           <div className='flex items-baseline gap-8'>
             <div>
                <img src={bookDetails?.image} alt="" />
            </div>

            <div>
                <h2 className='text-2xl font-semibold'>{bookDetails?.bookName}</h2>
                <p className='mt-4'>{bookDetails?.review}</p>

                <div className='flex items-center gap-4 mt-4'>
                    <button className='bg-amber-400 px-8 py-2 cursor-pointer'>Mar as Read</button>
                    <button 
                        onClick={() => handleAddWishList(bookDetails)}
                    className='bg-red-400 px-8 py-2 cursor-pointer'>Add To WishList</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default BookDetails;