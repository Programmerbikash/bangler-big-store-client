import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../../features/banner/BannerSlice";

const EditBook = () => {
  const { isLoading, banners, error } = useSelector((state) => state.banners);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanners());
  }, []);

  return (
    <div>
      <Head>
        <title>Edit Book</title>
      </Head>
      <Navbar />
      <h2 className="text-3xl text-center">Edit Books</h2>
      <section>
        {isLoading && <h2 className="text-3xl">Loading...</h2>}
        {error && <h2 className="text-3xl">{error}</h2>}
        {banners &&
          banners.map((banner) => {
            return (
              <div key={banner._id}>
                <h2 className="text-5xl">{banner.title}</h2>
                <h2 className="text-3xl">{banner.subTitle}</h2>
                <img src={banner.url} alt="" />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default EditBook;
