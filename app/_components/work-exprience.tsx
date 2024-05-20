import React from 'react'
import { StaticImageData } from 'next/image'

import ExprienceCard from './ui/exprience-card'
import THLogo from "../../svg/th.svg"
import LegendsLogo from "../../svg/legends.jpeg"
import AmexLogo from "../../svg/amex.png"

export interface IExprienceData {
    companyName: string;
    location: string;
    position: string;
    duration: string;
    description: string[];
    logo: string;
    technologies: string[];
    client?: {
        logo: StaticImageData,
        name: string,
        url: string,
    }[]
}

const WorkExprience = () => {
    const exprienceData: IExprienceData[] = [
        {
            companyName: "Tech Holding",
            location: "Ahmedabad,India",
            position: "Software Engineer",
            duration: "Jan 2023 - Present",
            logo: THLogo,
            description: ["Developing features of software application using my frontend and backend development skills.",
                "Developed Resposive user interface",
                "Developing features of software application using my frontend and backend development skills.",
                "Developing features of software application using my frontend and backend development skills.",

            ],
            technologies: ["React", "Next", "Tailwind", "Redux", "Node", "Express", "AWS", "Postgres", "Nest"],
            client: [
                {
                    logo: AmexLogo,
                    name: "Amex",
                    url: "https://www.americanexpress.com/en-in/"
                },
                {
                    logo: LegendsLogo,
                    name: "Legends",
                    url: "https://legends.net"
                },
            ],
        },
    ]

    return (
        <div className='mt-28 ml-12'>
            <h1 className='text-4xl font-bold mb-16 md:text-5xl'>
                👨🏻‍💻 Work Exprience
            </h1>
            <div className='flex flex-1 flex-col gap-12'>
                {
                    exprienceData.map((data, index) => (
                        <ExprienceCard key={index} data={data} index={index} />
                    ))
                }
            </div>
        </div>
    )

}

export default WorkExprience
