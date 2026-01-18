import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, rating,category } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
        <div className="card border border-gray-300 w-96 shadow-sm p-3">
      <figure className="p-3 bg-gray-100">
        <img
        className="w-41.5"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
