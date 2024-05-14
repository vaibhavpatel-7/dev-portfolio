import React from 'react'

import ExprienceCard from './ui/exprience-card'
import THLogo from "../../svg/th.svg"

export interface IExprienceData {
    companyName: string;
    location: string;
    position: string;
    duration: string;
    description: string;
    logo: string;
    technologies: string[];
}

const WorkExprience = () => {
    const exprienceData: IExprienceData[] = [
        {
            companyName: "Tech Holding",
            location: "Ahmedabad,India",
            position: "Software Engineer",
            duration: "Jan 2023 - Present",
            logo: THLogo,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae qui et voluptatibus voluptate numquam, accusamus, quod dignissimos, tempora non id porro iste quae! Laboriosam eaque vel alias voluptatem ipsam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae qui et voluptatibus voluptate numquam, accusamus, quod dignissimos",
            technologies: ["React", "Next", "Tailwind", "Redux", "Node", "Express", "AWS", "Postgres"]
        },
    ]


    return (
        <div className='h-screen flex flex-col'>
            <h1 className='text-5xl font-bold mt-24 ml-12'>
                Work Exprience
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
