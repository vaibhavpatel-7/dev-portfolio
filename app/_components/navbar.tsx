import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between w-full p-6 fixed z-40'>
            <Link href="/#home">
                <span className='font-bold text-2xl'>Vaibhav Patel</span>
            </Link>
            {/* Menu options */}
            <ul className='flex gap-4 text-2xl '>
                <li><Link href="/#home" className='hover:text-orange-500'>Home</Link></li>
                <li><Link href="#about" className='hover:text-orange-500'>About</Link></li>
                <li><Link href="#skills" className='hover:text-orange-500'>Skills</Link></li>
                <li><Link href="#work-exprience" className='hover:text-orange-500'>Work Exprience</Link></li>
                <li><Link href="#contact-me" className='hover:text-orange-500'>Contact me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
