import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import Navbar from '../Shared/Navbar/Navbar'
import fb from '../../images/fb.png'
import share from '../../images/share.png'
import Footer from '../Shared/Footer/Footer'
import image from '../../images/grayImg3.png'
import image2 from '../../images/grayImg2.png'
import { useParams } from 'react-router-dom'

export default function Details() {

    const params = useParams();
    // console.log(params);
    // console.log(params.blogId);

    // loading data
    const [blogDetails, setBlogDetails] = useState({});
    const url = `https://uddokta.code-studio4.com/blog/details?blogId=${params.blogId}`;

    const getBlogDetails = async () => {
        const response = await fetch(url)
        setBlogDetails(await response.json())
    }

    useEffect(() => {
        getBlogDetails();
    }, []);

    // console.log(blogDetails);
    const { title, content, youtube, image_link, blog_timestamp } = blogDetails;

    return (
        <>
            <Header />
            <Navbar />
            <section className='my-16 mx-96 flex justify-center'>
                <div>
                    <h1 className='text-3xl text-gray-700'>{title}</h1>

                    <div className='flex border-b border-t border-gray-300 py-4 my-8'>
                        <img src={fb} className='mx-2 w-6 h-6' />
                        <p className='mx-2 font-bold'>শেয়ার করুন</p>
                        <img src={share} className='px-2' />
                    </div>

                    <div>
                        <div>
                            <img src={image} className='border rounded-lg ' />
                        </div>

                        <article className=' py-3 text-gray-700'>
                            {content}
                        </article>

                        <div>
                            <img src={image2} className='border rounded-sm ' />
                        </div>

                    </div>

                    <div className='flex border-b border-t border-gray-300 py-4 my-8'>
                        <img src={fb} className='mx-2 w-6 h-6' />
                        <p className='mx-2 font-bold'>শেয়ার করুন</p>
                        <img src={share} className='px-2' />
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}
