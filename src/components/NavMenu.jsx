"use client"
import { useState } from 'react'
import { Squash as Menu } from 'hamburger-react'
import React from 'react'

const NavMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (index, item) => {
        setSelectedMenu(index);
        setIsOpen(false);
    }

    return (
        <div>
            {/* Fixed Hamburger Button for Mobile */}
            <div className='fixed top-4 right-4 md:hidden z-50'>
                <Menu toggled={isOpen} toggle={setIsOpen} />
            </div>

            {/* Centered Menu for Mobile */}
            {isOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40'>
                    <ul className='flex flex-col gap-4 text-white text-center'>
                        {["About", "Skills", "Projects", "Contact Me"].map((item, index) => (
                            <li
                                key={index}
                                className={selectedMenu === index ? "border-b-2 border-yellow-600" : ""}
                                onClick={() => handleSelect(index, item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* For desktop version */}
            <div className='hidden md:block'>
                <ul className='flex gap-4 p-10'>
                    {["About", "Skills", "Projects", "Contact Me"].map((item, index) => (
                        <li
                            key={index}
                            className={selectedMenu === index ? "border-b-2 border-yellow-600" : ""}
                            onClick={() => handleSelect(index, item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavMenu