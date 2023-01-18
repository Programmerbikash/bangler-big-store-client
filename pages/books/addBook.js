import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";

const AddBook = () => {
  const handleAddBanner = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subTitle = form.subTitle.value;
    const url = form.url.value;
    const bannerInfo = {
      title,
      subTitle,
      url,
    };
    // console.log(bannerInfo);
    fetch("https://bangler-big-store.vercel.app/banners", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bannerInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };
  return (
    <div>
      <Head>
        <title>Add Book</title>
      </Head>
      <Navbar />
      <h2 className="text-3xl text-center">Add Books</h2>
      <form onSubmit={handleAddBanner} action="">
        <div className="w-4/6 mx-auto">
          <label
            for="helper-text"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Write Banner Title
          </label>
          <input
            type="text"
            name="title"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your everyday style & comfort"
          />
        </div>
        <div className="w-4/6 mx-auto">
          <label
            for="helper-text"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Write Banner Sub Title
          </label>
          <input
            type="text"
            name="subTitle"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Accessories Collection."
          />
        </div>
        <div className="w-4/6 mx-auto">
          <label
            for="helper-text"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Put Your Image Url
          </label>
          <input
            type="text"
            name="url"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://i.ibb.co/3M8DQd8/slider1.png (This image Should be 1200*600)"
          />
        </div>
        <div className="w-4/6 mx-auto">
          <button
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl my-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
