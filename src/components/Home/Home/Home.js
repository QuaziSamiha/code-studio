import React from 'react'
import DrawerNavbar from '../../Shared/DrawerNavbar/DrawerNavbar'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import News1 from '../News1/News1'
import News2 from '../News2/News2'
import News3 from '../News3/News3'
import News4 from '../News4/News4'
import News5 from '../News5/News5'

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <DrawerNavbar />
            <section className='mx-3 md:container md:mx-auto mb-8 mt-2 md:mt-12 md:px-16 md:py-2'>
                <News1 />
                <p className='border-b border-gray-400 py-4 w-full'> </p>
                <News2 />
                <p className='border-b border-gray-400 py-4 w-full'> </p>
                <Banner />
                <News3 />
                <p className='border-b border-gray-400 py-4 w-full'> </p>
                <News4 />
                <p className='border-b border-gray-400 py-4 w-full'> </p>
                <News5 />
                <p className='border-b border-gray-400 py-4 w-full'> </p>
                <Banner />
            </section>
            <Footer />
        </>
    )
}
