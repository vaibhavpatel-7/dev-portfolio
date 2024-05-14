"use client"

import useUpdateUrlOnScroll from '@/lib/utils/hashChange';
import Link from 'next/link'

export interface Isection {
    id: string;
    title: string;
}

const Navbar = () => {
    const sections = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "skills", title: "Skills" },
        { id: "work-exprience", title: "Work Exprience" },
        { id: "contact-me", title: "Contact Me" },
    ];
    // const currentSection = useUpdateUrlOnScroll(sections);

    return (
        <nav className='flex justify-between w-full p-6 fixed z-40 backdrop-blur-sm border-b-2 border-b-slate-700'>
            <Link href="#home">
                <span className='font-bold text-2xl'>Vaibhav Patel</span>
            </Link>

            {/* Menu options */}
            <ul className='flex gap-4 text-2xl '>
                {
                    sections.map((section) => (
                        <li key={section.id} className=''>
                            <Link href={`#${section.id}`} className={section.id === "" ? ' font-extrabold menu-item' : 'menu-item'}>
                                <h1> {section.title}</h1>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
