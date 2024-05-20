import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import MailLogo from "../../svg/mail.svg"
import LinkedInLogo from "../../svg/linkedin.svg"
import GithubLogo from "../../svg/github.svg"
import ResumeLogo from "../../svg/resume.svg"


interface IContactDetails {
    title: string;
    link: string;
    icon: string;
}

const Contact = () => {

    const contactDetails: IContactDetails[] = [
        {
            title: "vaibhavp2955@gmail.com",
            link: "mailto:vaibhavp2955@gmail.com",
            icon: MailLogo,
        },
        {
            title: "Linked In",
            link: "https://www.linkedin.com/in/vaibhav-patel-1a95801b6/",
            icon: LinkedInLogo,
        },
        {
            title: "Github",
            link: "https://github.com/vai7bhv",
            icon: GithubLogo,
        },
        {
            title: "Resume",
            link: "/resume.pdf",
            icon: ResumeLogo,
        }
    ]

    return (
        <div className='mt-32 ml-6 flex justify-between flex-col h-[88dvh]'>
            {/* header (title) */}
            <div>
                <div>
                    <h3 className='lg:text-9xl md:6xl text-4xl font-bold'>Get in touch 👋🏻</h3>
                </div>

                {/* links */}
                <div>
                    <h4 className='text-xl font-extralight mt-16 md:w-5/12 w-auto'>{`My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`}</h4>
                    <div className='mt-11 flex flex-col gap-5 '>
                        {
                            contactDetails.map(item =>
                                <Link key={item.title} href={item.link} target='_blank' className='flex gap-4 w-fit'>
                                    <Image src={item.icon} alt={item.title} className='size-7' />
                                    <span className='flex justify-center font-normal items-center h-7 text-3xl text-[#EEEEEE]'>
                                        {/* FBF9F1  F5F7F8  393E46 EEEEEE */}
                                        {item.title}
                                    </span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <h5 className='text-3xl flex-1 flex pr-4 justify-end font-extralight mt-16'>Bye, © 2024 Vaibhav Patel.</h5>
            </div>
        </div>
    )
}

export default Contact