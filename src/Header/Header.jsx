import React from 'react'
// import './header.css'
import logo from '../assets/cart.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";







export default function Header() {
return (
    <div className=''>
        <div className='header_color'>
            <div className='flex justify-between items-center p-2 text-[12px] text-white container mx-auto px-25'>
                <div className='flex justify-between items-center'>
                <FaPhoneAlt />
                <p className='ps-2.5 cursor-pointer'>+001234567890</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='pe-2 cursor-pointer'>Get 50% Off on Selected Items  </p>
                    <p className='px-2'>|</p>
                    <p className='ps-2 cursor-pointer'>Shop Now</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center me-3 cursor-pointer'>
                        <p >Eng</p>
                        <MdKeyboardArrowDown className='mx-2 text-[18px]'/>
                    </div>
                    <div className='flex justify-between items-center ms-3 cursor-pointer'>
                        <p>Location</p>
                        <MdKeyboardArrowDown className='mx-2 text-[18px]'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-amber-100'>
        <div className='header container mx-auto px-25 '>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <li className='text-[20px] '>Category</li>
                            <li>Deals</li>
                            <li>What's News</li>
                            <li>Delivery</li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <input type="search" placeholder='Search Product' className='px-4 w-80 py-1 outline-blue-400  border-gray-300 border-2 rounded-2xl' />
                        <CiSearch className='absolute right-0 top-1/2 translate-[-50%]  cursor-pointer text-[18px]' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <FaUser/>
                        <ul>
                        <li className='text-[18px]  hover:text-cyan-200 transition-all duration-300'>Account</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                    <FaCartPlus />
                    <ul>
                    <li className='text-[18px]  hover:text-cyan-200 transition-all duration-300'>Cart</li>

                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
