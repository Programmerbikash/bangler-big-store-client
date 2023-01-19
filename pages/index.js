import Head from 'next/head'
import { Inter } from '@next/font/google'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import Categories from '@/components/Categories/Categories'
import BooksView from '../features/books'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <Categories />
      </main>
    </>
  )
}
