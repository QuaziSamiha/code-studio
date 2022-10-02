import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../../images/grayImg.png'

export default function LatestNews(props) {

    const { id, title, content, } = props.blog;
    // console.log(props);

    return (
        <div className='grid lg:grid-cols-2 my-4 pl-4 pr-2 md:px-4'>
            <div>
                <img src={image} className='border rounded-lg' />
            </div>
            <div className='lg:pl-8 text-gray-800 text-left	'>
                <h1 className='text-2xl md:text-3xl py-3'>{title}</h1>
                <article>

                    <p className='text-base py-1 md:py-2.5'>
                        {content}
                    </p>
                </article>
                <p className='text-base py-3 text-blue-500 text-lg'>
                    <Link to={'/'+id}>বিস্তারিত</Link>
                </p>
            </div>
        </div>
    )
}
