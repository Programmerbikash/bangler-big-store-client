import { fetchCategories, useGetGetAllCategoyQuery } from '@/features/category/categorySlice';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
    // const { data } = useGetGetAllCategoyQuery();
    const { category } = useSelector((state) => state.category);
    // console.log(category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

    return (
        <div className='mb-10'>
            <div>
<div className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Types Of Clothing Category</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {category && category.map(categoryData => {
            return <div key={categoryData._id} className="group relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
              <img src={categoryData?.url}alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0"></span>
                The Right Clothes
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">{categoryData?.title}</p>
          </div>
        })}
        {/* <div className="group relative">
          <div className="relative h-[450px] w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://i.ibb.co/qgf9FKf/image.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Jacket
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>

        <div className="group relative">
          <div className="relative h-[450px] w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://i.ibb.co/YtB1HVf/image.png" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Self-Improvement
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Sweater</p>
        </div>

        <div className="group relative">
          <div className="relative h-[450px] w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://i.ibb.co/Sy2KMLg/image.png" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Jeans
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
        </div> */}
      </div>
    </div>
  </div>
</div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default Categories;