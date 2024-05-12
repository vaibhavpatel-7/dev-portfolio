import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

const Hero = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <BackgroundBeams />
            <div className='flex flex-col items-center mt-56 z-10'>
                <span className='text-2xl font-bold flex gap-3 flex-col'>Hey, This is
                    <h1 className='text-bold text-9xl z-10'>
                        <p> Vaibhav Patel</p>
                    </h1>
                    <span className='flex gap-4 place-items-start text-2xl'>
                        <div className='text_animation shadow-lg '>
                            <ul>
                                <li>a Full Stack Developer</li>
                                <li>a Tech Enthusiast</li>
                                <li>a Team Player</li>
                                <li>a Passionate Developer</li>
                                <li>a Full Stack Developer</li>
                            </ul>
                        </div>
                    </span>
                </span>
            </div>
            <a href='/#about'>
                <div className='flex mb-28 w-full items-center justify-center'>
                    <div className='scroll_down'>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Hero