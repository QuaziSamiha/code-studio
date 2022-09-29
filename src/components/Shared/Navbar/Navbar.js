import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-center w-full border-t border-b border-gray-200 shadow-md bg-white font-bold tracking-wide'>
            <nav className='py-2'>
                <ul className='space-x-6'>
                    <li className='inline-block'>সর্বশেষ</li>
                    <li className='inline-block'>সফল উদ্যোগ</li>
                    <li className='inline-block'>স্টার্টআপ</li>
                    <li className='inline-block'>তারুণ্যের গল্প</li>
                    <li className='inline-block'>নারী উদ্যোক্তা</li>
                    <li className='inline-block'>ক্যাম্পাসের প্রিয়মুখ</li>
                </ul>
            </nav>
        </div>
    )
}
