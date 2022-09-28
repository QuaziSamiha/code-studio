import React from 'react'
import logo from '../../../images/logo.png'

export default function Header() {

    var date = new Date()
    // const banglaDate = date.getDigitBanglaFromEnglish()
    var year = date.getFullYear()
    var day = date.getDay()
    var month = date.getMonth()
    var d = date.getDate()
    // var bangla_converted_number=english_number.getDigitBanglaFromEnglish();

    console.log(date)
    return (
        <div className='container mx-auto my-8'>
            <div className='grid grid-cols-3 px-16'>
                <div>
                    cross sign
                </div>
                <div className='col-span-2'>
                    <img src={logo} className='h-10' />
                </div>
            </div>
            <div className='px-10'>
                date
                {/* date */}
                {/* {day}, */}
                {/* {d}
                {month+1}

                {year} */}

                {/* <p>{date.map(d => <p>d</p>)}</p> */}
            </div>
        </div>
    )
}
