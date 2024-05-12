import React from 'react'


const Navbar = () => {
    return (
        <nav className='flex justify-between w-full p-6 fixed z-40'>
            <span className='font-bold '>Vaibhav Patel</span>
            {/* Menu options */}
            <ul className='flex gap-4 font-bold'>
                <li><a href="/">Home</a></li>
                <li><a href="#about" className='scroll-smooth'>About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#Work Exprience">Work Exprience</a></li>
                <li><a href="#contact-me">Contact me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar