import Image from 'next/image'
import React from 'react'
import { Source_Code_Pro } from 'next/font/google'

// import GuyWithLaptop from "../../svg/men-with-laptop.jpg"
import Education from "../../svg/education.svg"
import Location from "../../svg/location.svg"
import Job from "../../svg/job.svg"
import Profile from "../../svg/profile-pic.jpg"
import LogoWithTitle from './ui/logo-title'

const SourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

const About = () => {
    return (
        <div className='mt-40 md:mt-0 flex flex-1 items-center flex-col md:flex-row min-h-screen w-full md:justify-evenly'>
            <div className='min-w-[300px] max-w-[550px] md:flex-1 xl:ml-16 z-40  sm:mb-10' >
                <Image src={Profile} alt='man with laptop'  className='w-80 h-auto md:w-full rounded-lg p-5' />
            </div>

            <div className='md:flex-1 px-7'>
                <h3 data-aos="fade-up" data-aos-delay="100" className={`lg:text-5xl text-4xl font mb-4 font-bold -tracking-tight ${SourceCodePro.className}`}>Hey,There 🙋🏻</h3>
                <p data-aos="fade-up" data-aos-delay="200" className='lg:text-2xl text-lg md:w-5/6 xl:w-3/4 tracking-wide font-extralight '>
                    A proactive Full Stack Developer with 1.5 years of experience in
                    designing, developing, and implementing robust web applications.
                    Proficient in addressing issues and troubleshooting challenges across
                    the entire application.Committed to writing clean, maintainable code
                    and adhering to best practices.
                </p>
                <div className='flex-col md:flex-row mt-6 flex gap-4' >
                    <LogoWithTitle  delay={"250"} logo={Job} alt='Job' title='Software Engineer' />
                    <LogoWithTitle  delay={"300"} logo={Location} alt='Location' title='Ahmedabad, India' />
                    <LogoWithTitle  delay={"350"} logo={Education} alt='Education' title='B.Tech, DDU' />
                </div>
            </div>
        </div>
    )
}

export default About