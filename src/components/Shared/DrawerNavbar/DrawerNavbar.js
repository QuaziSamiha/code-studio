import React, { useState, useEffect } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import crossSign from '../../../images/cross.png'

const DrawerNavbar = (props) => {

    // for drawer toggle button
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    // ----------------------------- for data load from backend -------------------------------------
    const [categories, setCategories] = useState({});

    const getCategories = async () => {
        const response = await fetch(`https://uddokta.code-studio4.com/category`)
        setCategories(await response.json())
    }

    useEffect(() => {
        getCategories();
    }, []);

    // console.log(categories);
    const allCategories = categories.allCategoryList;
    // console.log(allCategories);

    return (
        <>
            <button onClick={toggleDrawer}>
                Show
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={400}
                className='bla bla bla'
            >
                <div className='m-6 bg-white tracking-wide'>
                    <div className='flex justify-between'>
                        <h1 className='pl-2 text-xl'>আরো খবর পড়ুন</h1>
                        <div className='pt-1 h-8'>
                            <button onClick={toggleDrawer}>
                                <img className='w-6 h-6' src={crossSign} />
                            </button>

                        </div>
                    </div>
                    <nav className='pl-6 py-2 font-bold'>
                        <ul className=''>
                            {
                                allCategories?.map((category, index) => {
                                    return (
                                        <li key={index} className='py-2'>
                                            {category.type}
                                        </li>
                                    )
                                })
                            }
                            {/* <li className='py-2'>সর্বশেষ</li>
                            <li className='py-2'>সফল উদ্যোগ</li>
                            <li className='py-2'>স্টার্টআপ</li>
                            <li className='py-2'>তারুণ্যের গল্প</li>
                            <li className='py-2'>নারী উদ্যোক্তা</li>
                            <li className='py-2'>ক্যাম্পাসের প্রিয়মুখ</li> */}
                        </ul>
                    </nav>
                </div>
            </Drawer>
        </>
    )
}

export default DrawerNavbar

