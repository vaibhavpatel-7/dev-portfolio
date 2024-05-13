import Image from 'next/image';
import React from 'react'

interface IProps {
    logo: string;
    title: string;
}


const Skill = ({ logo, title }: IProps) => {
    return (
        <div className='flex gap-3 flex-col w-fit p-6 border-[#b0b1b1] justify-between'>
            <Image src={logo} alt={title} className='w-20' />
            <span className='font-medium text-2xl text-slate-400'>
                {title}
            </span>
        </div>
    )
}

export default Skill