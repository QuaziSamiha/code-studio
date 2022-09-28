import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-center border-2 border-gray-300 py-2'>
            <nav>
                <ul className='space-x-4'>
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
