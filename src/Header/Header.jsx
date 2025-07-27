import React from 'react'
// import './header.css'
import logo from '../assets/cart.svg'
// import logo from './assets/shopcart.svg'


export default function Header() {
return (
    <div className='bg-blue-200'>
        <h2>Hello Mostafa Hoosam Elden Sarhan</h2>
            <div className='header container mx-auto px-4 bg-amber-100'>
                <ul className='flex justify-around items-center'>
                    <li><img src={logo} alt="" /></li>
                    <li className='text-[20px] '>Category</li>
                    <li>Deals</li>
                    <li>What's News</li>
                    <li>Delivery</li>
                    <li className='m-2'>
                        <input type="search" placeholder='Search' className='p-2 outline-black border-2 rounded-2xl' />
                    </li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>
)
}
