import React from 'react'
import image from '../../../images/grayImg.png'

export default function News5() {
    return (
        <div className='grid grid-cols-2 my-4'>
            <div>
                <img src={image} />
            </div>
            <div>
                <h1>গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের বিজ্ঞান বিভাগের ফল প্রকাশ</h1>
                <article>
                    গুচ্ছভুক্ত ২২টি সাধারণ ও বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার বিজ্ঞান বিভাগের ফলাফল প্রকাশিত হয়েছে। আজ বৃহস্পতিবার গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের অফিশিয়াল ওয়েবসাইটে এই ফলাফল প্রকাশ করা হয়।
                    গুচ্ছভুক্ত ২২টি সাধারণ ও বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার বিজ্ঞান বিভাগের ফলাফল প্রকাশিত হয়েছে। আজ বৃহস্পতিবার গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের অফিশিয়াল ওয়েবসাইটে এই ফলাফল প্রকাশ করা হয়।
                </article>
                <span>
                    <a>বিস্তারিত</a>
                </span>
            </div>
        </div>
    )
}