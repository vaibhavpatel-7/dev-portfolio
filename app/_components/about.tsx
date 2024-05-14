import Image from 'next/image'
import React from 'react'

// import GuyWithLaptop from "../../svg/men-with-laptop.jpg"
import Education from "../../svg/education.svg"
import Location from "../../svg/location.svg"
import Job from "../../svg/job.svg"
import Nest from "../../svg/nestjs.svg"
import LogoWithTitle from './ui/logo-title'

const About = () => {
    return (
        <div className='h-screen flex items-center'>
            <div className='flex flex-1 items-center justify-center' >
                <Image src={Nest} alt='man with laptop' className='w-2/3 rounded-lg' />
            </div>

            <div className='w-1/2'>
                <p className='text-2xl'>
                    My journey began as a  where I honed my problem-solving skills and discovered a love for creating user-friendly experiences. Now, as a full-stack developer, I seamlessly bridge the gap between design and development.
                    I thrive on challenges and find immense satisfaction in translating complex functionalities into intuitive interfaces. My dedication to user-centered design ensures that every project I touch is not just visually appealing but also incredibly usable.
                </p>
                <div className='mt-6 flex gap-4'>
                    <LogoWithTitle logo={Job} alt='Job' title='Software Engineer' />
                    <LogoWithTitle logo={Location} alt='Location' title='Ahmedabad, India' />
                    <LogoWithTitle logo={Education} alt='Education' title='B.Tech, DDU' />
                </div>
            </div>
        </div>
    )
}

export default About