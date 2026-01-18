import React, { useEffect, useState } from "react";
import { clearWishListInLocalStorage, getWishListFromLocalStorage } from "../../../Utlity/AddToLocalStorage";

interface Book {
  image: string | undefined;
  bookId: string | number;
  bookName: string;
}

const About = () => {
  const [bookData, setBookData] = useState<Book[]>([]);

  useEffect(() => {
    const data = getWishListFromLocalStorage();
    console.log("book data from about page", data);
    setBookData(data || []);
  }, []);

  const hndleDelete = (bookId: string | number) => {
    const updatedBookData = bookData.filter((book) => book.bookId !== bookId);
    setBookData(updatedBookData);
    clearWishListInLocalStorage(bookId);
  };

  return (
    <div className="flex flex-col gap-8 mt-12">
      {bookData.map((book) => (
        <div key={book.bookId}>
          <div className="flex">
            <img className="w-1/8" src={book.image} alt="" />
            <button 
            onClick={() =>hndleDelete(book.bookId)}
            className="p-2 bg-red-600 text-white mt-4 hover:bg-amber-800 duration-300 cursor-pointer">
              DELETE
            </button>
          </div>
          <h2>{book.bookName}</h2>
        </div>
      ))}
    </div>
  );
};

export default About;
