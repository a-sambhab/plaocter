import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav class="main-nav">
        <ul class="menu">
            
            <li class="menu__items to-left">
                <img className="logo-img" src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1632654608/samples/plaocter/WhatsApp_Image_2021-09-26_at_4.28.02_AM-removebg-preview_mix4je.png" alt="logo" />
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#home">Home</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#doctor">Doctor</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#shop">Shop</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#service">Services</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#blog">Blog</a>
            </li>
        </ul>
    </nav>
        </div>
    )
}
