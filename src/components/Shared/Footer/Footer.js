import React from 'react'
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../../images/facebook.png'
import utube from '../../../images/utube.png'

export default function Footer() {
    return (
        <footer className='inset-x-0 bottom-0'>
            <section className='container mx-auto my-8 px-6 md:px-16 py-6 h-auto text-gray-600'>
                <div className=''>
                    <img className='h-6' src={logo} />
                </div>

                <p className='border-b border-gray-400 py-2 w-full'> </p>

                <div className='grid md:grid-cols-4'>
                    <div className='col-span-3 pt-4 text-gray-800 text-base tracking-wide	'>
                        <p className=''>
                            আমরা আপনার উদ্যোগ সম্পর্কে, আপনার সম্পর্কে জানতে চাই শুনতে চাই আপনার গল্প
                        </p>
                        <p>
                            জানাতে কল করুন 01784286885 নাম্বারে
                        </p>
                    </div>

                    <div className=''>
                        <p className='pt-4 text-right text-gray-800 text-base tracking-wide'>
                            অনুসরণ করুন
                        </p>

                        <div className='flex md:flex-row-reverse pt-4'>
                            <div className='pr-2 md:pl-3'>
                                <img src={utube} />
                            </div>
                            <div className=''>
                                <img src={facebook} />
                            </div>
                        </div>
                    </div>
                </div>

                <p className='border-b border-gray-400 py-2 w-full'> </p>
            </section>

            <section className='flex justify-center my-4 mx-6 md:mx-0'>
                <div className='text-center text-sm text-gray-500'>
                    <p className='py-2'>স্বত্ব © Code Studio Software Company</p>
                    <p className=''>Mobile Apps Development | Website Development</p>
                    <p className='py-2'>01784286885 | 01710598673</p>
                </div>
            </section>
        </footer>
    )
}
