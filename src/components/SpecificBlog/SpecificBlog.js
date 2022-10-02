import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';

export default function SpecificBlog() {

    let params = useParams();
    // console.log(params);
    // console.log(params.categoryId);

    // loading data from backend
    const [specificBlog, setSpecificBlog] = useState({})

    const url = `https://uddokta.code-studio4.com/blog/featured?typeId=${params.categoryId}`
    // console.log(url);
    const getSpecificBlog = async () => {
        const response = await fetch(url);
        setSpecificBlog(await response.json())
    }

    useEffect(() => {
        getSpecificBlog();
    }, [])

    // console.log(specificBlog);
    const { title, content } = specificBlog;

    return (
        <>
            <Header />
            <Navbar />
            <div className='grid lg:grid-cols-2 my-4 pl-4 pr-2 md:px-4'>
                <div>
                    {/* <img src={image} className='border rounded-lg' /> */}
                </div>
                <div className='lg:pl-8 text-gray-800 text-left	'>
                    <h1 className='text-2xl md:text-3xl py-3'>{title}</h1>
                    <article>
                        <p className='text-base py-1.5 md:py-3'>
                            {content}
                        </p>
                    </article>
                    <p className='text-base py-3 text-blue-500 text-lg'>
                        <Link to="/details">বিস্তারিত</Link>
                    </p>
                </div>
            </div>

        </>
    )
}
