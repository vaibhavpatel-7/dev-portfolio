"use client"

import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'
import Aos from "aos";
import "aos/dist/aos.css";

import useUpdateUrlOnScroll from '@/lib/utils/hashChange';
import { useEffect } from 'react';

export interface Isection {
    id: string;
    title: string;
}
const SourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

const Navbar = () => {
    const sections = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "skills", title: "Skills" },
        { id: "work-exprience", title: "Work Exprience" },
        { id: "contact-me", title: "Contact Me" },
    ];
    // const currentSection = useUpdateUrlOnScroll(sections);

    useEffect(() => {
        Aos.init({
            offset: 10, // offset (in px) from the original trigger point
            duration: 500, // values from 0 to 3000, with step 50ms
            once: true,
            // easing: 'ease-in-sine',
        });
    }, []);

    // h-15 px-10 xl:px-16 py-5 flex-row items-center justify-between sticky inset-x-0 top-0 backdrop-blur bg-black/50 border-slate-800 border-dashed z-50 min-w-[100vw] hidden lg:flex placeholder: border-b-0
    return (
        <nav className='h-24 flex flex-row items-center inset-x-0 top-0 bg-black/50 border-slate-800 border-dashed justify-between w-full xl:px-16 py-5 sticky z-40 backdrop-blur-sm border-b-slate-700 placeholder: border-b-0'>
            <Link href="#home">
                <span className={` flex  font-semibold  text-2xl ${SourceCodePro.className}`}>{"<Vaibhav Patel./>"}</span>
            </Link>

            {/* Menu options */}
            <ul className='gap-4 text-2xl hidden lg:flex'>
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
