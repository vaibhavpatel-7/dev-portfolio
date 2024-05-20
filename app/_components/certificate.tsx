import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

import AWS_SOL_LOGO from "../../svg/aws_sol.png"
import AWS_GEN_LOGO from "../../svg/aws_gen.png"

const MontserratFont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

const Certificate = () => {
    return (
        <div className='bg-[#F8F4EC] min-h-36 flex justify-between p-5'>
            {/* EEE  F8F4EC {F5F7F8} */}
            <h3 className={`lg:text-6xl text-2xl font-bold flex text-black ${MontserratFont.className} `}>
                Certificates
            </h3>
            <div className='flex'>
                <div className='lg:size-36 size-24'>
                    <Link href="https://www.credly.com/badges/2526de8d-25de-4ee2-bf81-de76b5c2422b/public_url" target='_blank'>
                        <Image src={AWS_SOL_LOGO} alt='AWS Solution Architect' />
                    </Link>
                </div>
                <div className='lg:size-36 size-24'>
                    <Link href="https://www.credly.com/badges/fd9a0c86-a585-43e9-b480-62b23cb5b2cb/public_url" target='_blank'>
                        <Image src={AWS_GEN_LOGO} alt='AWS Generative AI' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Certificate