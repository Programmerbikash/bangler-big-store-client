import Image from 'next/image';
import React from 'react';

const Categories = () => {
    return (
        <div className='my-12'>
            <h2 className='text-3xl font-bold text-center my-4'>Category</h2>
            <div className='flex'>
            <Image src="/assets/category/accessories.jpg" width={200} height={200} />
            <Image src="/assets/category/coats-2.jpg" width={200} height={200} />
            <Image src="/assets/category/bag-3.jpg" width={200} height={200} />
            <Image src="/assets/category/jacket.jpg" width={200} height={200} />
            <Image src="/assets/category/pants-2.jpg" width={200} height={200} />
            <Image src="/assets/category/shoes-2.jpg" width={200} height={200} />
            <Image src="/assets/category/pants.jpg" width={200} height={200} />
            <Image src="/assets/category/tshirt.jpg" width={200} height={200} />
            </div>
            <div>
            </div>
        </div>
    );
};

export default Categories;