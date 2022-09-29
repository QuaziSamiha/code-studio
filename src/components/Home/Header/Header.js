import React from 'react'
import logo from '../../../images/logo.png'
import barSign from '../../../images/bar.png'
export default function Header() {

    var date = new Date()
    var year = date.getFullYear()
    var day = date.getDay()
    var month = date.getMonth()
    var d = date.getDate()

    console.log(date)
    return (
        <div className='container mx-auto mb-4 mt-6 px-4 md:px-16'>
            <div className='grid grid-cols-3 px-2 md:px-16'>
                <div>
                    <img className='w-5 md:w-8 h-6 md:h-10' src={barSign} />
                </div>
                <div className='col-span-2'>
                    <img src={logo} className='h-6 md:h-10 pr-4' />
                </div>
            </div>
            <div className='px-10 pt-6'>
                <p className='hidden md:contents text-gray-500 text-base font-extralight'>
                    বৃহস্পতিবার, সেপ্টেম্বর ২০২২
                </p>
            </div>
        </div>
    )
}
