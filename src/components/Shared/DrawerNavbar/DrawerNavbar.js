import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const DrawerNavbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>
                {/* Show */}
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className='flex justify-center w-full border-t border-b border-gray-200 shadow-md bg-white font-bold tracking-wide'>
                    <nav className='py-2'>
                        <ul className='space-x-6'>
                            <li className=''>সর্বশেষ</li>
                            <li className=''>সফল উদ্যোগ</li>
                            <li className=''>স্টার্টআপ</li>
                            <li className=''>তারুণ্যের গল্প</li>
                            <li className=''>নারী উদ্যোক্তা</li>
                            <li className=''>ক্যাম্পাসের প্রিয়মুখ</li>
                        </ul>
                    </nav>
                </div>
            </Drawer>
        </>
    )
}

export default DrawerNavbar

