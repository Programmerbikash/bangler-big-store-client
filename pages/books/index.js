import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AddBook from "./addBook";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  return (
    <div>
      <Head>
        <title>Books View</title>
      </Head>
      <Navbar />
      <h2 className="text-3xl text-center">Books View</h2>
      <div className="slide-container">
        <Slide>
          {books &&
            books.map((book) => (
              <div key={book.id}>
                <div
                  style={{ ...divStyle, backgroundImage: `url(${book.url})` }}
                >
                  <div className="text-center">
                    <h4 className="text-2xl text-center font-bold pt-10 text-white">
                      {book.title}
                    </h4>
                    <h1 className="text-7xl font-semibold text-center text-white py-20">
                      {book.subTitle}
                    </h1>
                    <button
                      type="button"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center"
                    >
                      Shop new collection
                    </button>
                    <button
                      type="button"
                      className="mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </Slide>
      </div>
      <div>
        <AddBook />
      </div>
    </div>
  );
};

export default BooksView;
