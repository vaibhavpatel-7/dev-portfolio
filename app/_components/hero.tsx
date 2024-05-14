import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'

import { BackgroundBeams } from './ui/background-beams'


const inter = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

const Hero = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <BackgroundBeams />
            <div className='flex flex-col items-center z-10 justify-center flex-1'>
                <span className='text-2xl flex gap-3 flex-col'>
                    <p className={inter.className}>
                        Hey, This is
                    </p>

                    <h1 className='font-bold text-9xl z-10 tracking-wide'>
                        VAIBHAV PATEL
                    </h1>

                    <span className='flex gap-4 place-items-start text-4xl'>
                        <div className='text_animation '>
                            <ul className='list_animation'>
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
            <Link href='/#about'>
                <div className='flex mb-28 w-full items-center justify-center transition-[1s]'>
                    <div className='scroll_down'>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Hero
