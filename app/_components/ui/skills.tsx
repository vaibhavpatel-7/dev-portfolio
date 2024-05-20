import Image from 'next/image';
import React from 'react'

interface IProps {
    logo: string;
    title: string;
}


const Skill = ({ logo, title }: IProps) => {
    return (
        <div className='flex gap-3 flex-col w-fit lg:p-6 p-3 border-[#b0b1b1] justify-between'>
            <Image src={logo} alt={title} className='lg:size-20 size-11' />
            <span className='font-medium lg:text-2xl text-lg text-slate-300'>
                {title}
            </span>
        </div>
    )
}

export default Skill