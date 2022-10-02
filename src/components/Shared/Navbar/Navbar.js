import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [categories, setCategories] = useState({});

    const getCategories = async () => {
        const response = await fetch(`https://uddokta.code-studio4.com/category`)
        // const data = await response.json();
        setCategories(await response.json())
        // console.log(data)
        // console.log(data.featuredList[0].type);
    }

    useEffect(() => {
        getCategories();
    }, []);

    // console.log(categories);
    // console.log(categories.featuredList[0].id);
    const features = categories.featuredList;
    // console.log(features)

    // features?.map(({ id, type, is_featured }) => {
    // console.log(type);
    // })

    return (
        <div className='w-full bg-white font-bold tracking-wide hidden md:contents'>
            <nav className='py-2 flex justify-center  border-t border-b border-gray-200 shadow-md '>
                <ul className='space-x-6'>

                    {/* <li className='inline-block'>
                        <Link to="/">সর্বশেষ</Link>
                    </li> */}
                    {
                        features?.map((feature, index) => {
                            // console.log(feature.type);
                            // console.log(feature.id);
                            return (
                                <li key={index} className='inline-block'>
                                    <NavLink to={feature.type === "সর্বশেষ" ? "/" :"/" + feature.type + "/" + feature.id}>{feature.type}</NavLink>
              
                                </li>
                            )
                        })
                    }

                    {/* 
                    <li className='inline-block'>
                        <Link to="/successfulVenture">সফল উদ্যোগ</Link>
                    </li>
                    <li className='inline-block'>
                        <Link to="/startup">স্টার্টআপ</Link>
                    </li>
                    <li className='inline-block'>
                        <Link to="/youthStory">তারুণ্যের গল্প</Link>
                    </li>
                    <li className='inline-block'>
                        <Link to="/womenEntrepreneurs">নারী উদ্যোক্তা</Link>
                    </li>
                    <li className='inline-block'>
                        <Link to="/campusStudent">ক্যাম্পাসের প্রিয়মুখ</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
