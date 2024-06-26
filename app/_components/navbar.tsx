"use client"

import "aos/dist/aos.css";

import { Source_Code_Pro } from 'next/font/google'
import { useEffect, useMemo, useState } from 'react';
import Aos from "aos";
import Link from 'next/link'

export interface ISection {
    id: string;
    title: string;
}
const SourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

const Navbar = () => {
    const sections = useMemo(() => [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "skills", title: "Skills" },
        { id: "work-experience", title: "Experience" },
        { id: "contact-me", title: "Contact" },
    ], []);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    // handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            // header border logic: 
            const scrollY = window.scrollY;
            const scrollThreshold = 100;

            if (scrollY > scrollThreshold && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollY <= scrollThreshold && isScrolled) {
                setIsScrolled(false);
            }

            // smooth scroll logic :
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    // update hash in path
    useEffect(() => {
        history.replaceState(null, '', `#${activeSection}`);
    }, [activeSection])
    useEffect(() => {
        Aos.init({
            offset: 10, // offset (in px) from the original trigger point
            duration: 500, // values from 0 to 3000, with step 50ms
            once: true,

        });
    }, []);

    return (
        <nav className='h-14 md:h-24 flex flex-row items-center inset-x-0 top-0 bg-black/50 border-slate-800 border-dashed justify-between w-full xl:px-16 py-5 sticky z-40 backdrop-blur-sm border-b-slate-700 placeholder: border-b-0'>
            <Link href="#home">
                <span className={`ml-4 md:ml-2 flex font-semibold text-2xl ${SourceCodePro.className}`}>{"<Vaibhav Patel./>"}</span>
            </Link>

            {/* Menu options */}
            <ul className='gap-4 text-lg hidden lg:flex tracking-widest uppercase'>
                {
                    sections.map((section) => (
                        <li key={section.id} className={`${activeSection === section.id ? "text-white" : "text-[#708090]"} pb-3  `}>
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
