import React from "react";
import bookImage from "../../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="w-full h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src={bookImage}
          alt="Book"
        />
        {/* <div className="">
          <h2 className="text-white text-4xl font-bold uppercase">this is book shop</h2>
          <p className="w-[60%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            non rerum, ipsa fugiat fugit corporis ut reiciendis alias sint vel
            corrupti impedit hic laborum eius libero iusto, inventore quo. Quo.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
