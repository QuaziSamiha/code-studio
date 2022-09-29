import React from 'react'
import image from '../../../images/grayImg.png'

export default function News4() {
    return (
        <div className='grid grid-cols-2 my-4 px-4'>
            <div>
                <img src={image} className='border rounded-lg' />
            </div>
            <div className='pl-8 text-gray-800 text-left	'>
                <h1 className='text-3xl py-3'>গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের বিজ্ঞান বিভাগের ফল প্রকাশ</h1>
                <article>
                    <p className='text-base py-2.5'>
                        গুচ্ছভুক্ত ২২টি 3 ও বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার বিজ্ঞান বিভাগের ফলাফল প্রকাশিত হয়েছে। আজ বৃহস্পতিবার গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের অফিশিয়াল ওয়েবসাইটে এই ফলাফল প্রকাশ করা হয়।
                    </p>
                    <p className='text-base py-3'>
                        গুচ্ছভুক্ত ২২টি সাধারণ ও বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার বিজ্ঞান বিভাগের ফলাফল প্রকাশিত হয়েছে। আজ বৃহস্পতিবার গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের অফিশিয়াল ওয়েবসাইটে এই ফলাফল প্রকাশ করা হয়।
                    </p>
                </article>
                <p className='text-base py-3 text-blue-500 text-lg'>
                    <a>বিস্তারিত</a>
                </p>
            </div>
        </div>
    )
}
