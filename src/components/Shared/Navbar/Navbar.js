import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-full bg-white font-bold tracking-wide hidden md:contents'>
            <nav className='py-2 flex justify-center  border-t border-b border-gray-200 shadow-md '>
                <ul className='space-x-6'>
                    <li className='inline-block'>
                        <Link to="/">সর্বশেষ</Link>
                    </li>
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
                    </li>
                </ul>
            </nav>
        </div>
    )
}
