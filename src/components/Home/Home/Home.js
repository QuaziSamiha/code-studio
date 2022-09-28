import React from 'react'
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
            <section className='container mx-auto h-96 my-8 px-14 py-6'>
                <News1 />
                <hr />
                <News2 />
                <hr />
                <Banner />
                <hr />
                <News3 />
                <hr />
                <News4 />
                <hr />
                <News5 />
                <hr />
                <Banner />
            </section>
        </>
    )
}
