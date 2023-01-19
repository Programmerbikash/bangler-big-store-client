import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const booksId = () => {
    const router = useRouter();
    const id = router.query.booksId;

    return (
        <div>
            <Head>
                <title>Dynamic Page</title>
            </Head>
            <Navbar />
            <h1 className="text-4xl">Dynamic Book Page of {id}</h1>
        </div>
    );
};

export default booksId;