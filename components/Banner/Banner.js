import { fetchBanners } from "@/features/banner/BannerSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  // const books = useSelector(state => state.booksReducer.books);
  const { banners } = useSelector((state) => state.banners);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanners());
  }, []);
  // console.log(books);
  
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {banners &&
            banners.map((banner) => (
              <div key={banner._id}>
                <div className="flex items-center justify-center bg-cover h-[500px]"
                  style={{backgroundImage: `url(${banner.url})` }}
                >
                  <div className="text-center">
                    <h4 className="text-2xl text-center font-bold pt-10 text-white">
                      {banner.title}
                    </h4>
                    <h1 className="text-7xl font-semibold text-center text-white py-20">
                      {banner.subTitle}
                    </h1>
                    <button
                      type="button"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-center"
                    >
                      Shop new collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </Slide>
      </div>
    </div>
  );
};

export default Banner;
