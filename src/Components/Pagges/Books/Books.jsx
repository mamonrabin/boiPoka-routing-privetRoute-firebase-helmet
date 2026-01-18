import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() =>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])

    // console.log(allBooks);
    return (
        <div className='my-12'>
            <h2 className='text-center text-2xl font-bold'>Books</h2>

            <div className='grid lg:grid-cols-3 gap-8 mt-6'>
                {
                    allBooks.map(book =><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;