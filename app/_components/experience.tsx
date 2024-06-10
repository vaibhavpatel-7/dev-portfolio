import React from 'react'
import { StaticImageData } from 'next/image'

import ExperienceCard from './ui/experience'
import THLogo from "../../svg/th.svg"
import LegendsLogo from "../../svg/legends.jpeg"
import AmexLogo from "../../svg/amex.png"

export interface IExperienceData {
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

const WorkExperience = () => {
    const experienceData: IExperienceData[] = [
        {
            companyName: "Tech Holding",
            location: "Ahmedabad,India",
            position: "Software Engineer",
            duration: "Jan 2023 - Present",
            logo: THLogo,
            description: ["Developing features of software application using my frontend and backend development skills.",
                "Developing Responsive user interface",
                'Working closely with clients for project development. Managing the software development lifecycle.',
                'Testing and fixing bugs.',
                'Applying best practices and standards to optimize codebase.',
                'Communicating with other team members to deliver successful projects.',
                'Developing and executing project plans.',
                'Exploring new Technologies or frameworks as per need of projects.',

            ],
            technologies: ["Javascript","Typescript","React", "Next","Node", "Express", "AWS", "Tailwind", "Redux", "Postgres", "Nest"],
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
        <div className='mt-28 md:mx-12 mx-7'>
            <h1 className='text-4xl font-bold mb-16 md:text-5xl'>
                👨🏻‍💻 Work Experience
            </h1>
            <div className='flex flex-1 flex-col gap-12'>
                {
                    experienceData.map((data, index) => (
                        <ExperienceCard key={index} data={data} index={index} />
                    ))
                }
            </div>
        </div>
    )

}

export default WorkExperience
