import { useAddBannerMutation, useBannersQuery, useDeleteBannerMutation, useUpdateBannerMutation } from "@/features/banner/BannerSlice";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useBannersQuery();
  console.log(data);
  

  return (
    <div>
      <div className="slide-container">
      {/* {isLoading && <h2>...Loading</h2>} */}
      {/* {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>} */}
        <Slide>
          {data &&
            data?.map((banner) => (
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
      <div><AddBanner /></div>
    </div>
  );
};

export const BannerDetail = ({ id }) => {
  const { data } = useBannerQuery(id);
  return (
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  )
}

export const AddBanner = () => {
  const [addBanner] = useAddBannerMutation();
  const [updateBanner] = useUpdateBannerMutation();
  const [deleteBanner] = useDeleteBannerMutation();
  // const { refetch } = useContactsQuery();
  const banner = {
    "_id": "63c69d515058947820d9ba8b",
    "title": "Men's Band Collar Slim Fit Formal/Party Waist Coat",
    "url": "https://i.ibb.co/3cTJnx4/image.png"
  }
  const bannerUpdate = {
    "_id": "63c69d515058947820d9ba8b",
    "title": "Exclusive & Fashionable Black Suit For Men",
    "url": "https://i.ibb.co/3cTJnx4/image.png"
  }
  const addHandler = async () => {
    await addBanner(banner);
    // refetch();
  }
  const updateHandler = async () => {
    await updateBanner(bannerUpdate);
    // refetch();
  }
  const deleteHandler = async () => {
    await deleteBanner(banner.id);
    // refetch();
  }
  return (
    <>
      <button className='bg-orange-400 text-white rounded-xl py-2 px-4 mb-5 font-bold' onClick={addHandler}>Add Contact</button>
      <button className='bg-orange-400 text-white rounded-xl py-2 px-4 mb-5 font-bold mx-2' onClick={updateHandler}>Update Contact</button>
      <button className='bg-orange-400 text-white rounded-xl py-2 px-4 mb-5 font-bold' onClick={deleteHandler}>Delete Contact</button>
    </>
  )
}

export default Banner;
