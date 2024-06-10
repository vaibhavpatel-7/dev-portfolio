import Image from "next/image"

import {  IExperienceData } from "../experience"
import Link from "next/link"

interface IProps {
    data: IExperienceData,
    index: number
}

const ExprienceCard = ({ data }: IProps) => {
    return (
        <div className={"flex items-start w-full gap-7 md:flex-row flex-col "}>

            {/* logo */}
            <div data-aos="fade-up" data-aos-delay="100" className='flex flex-row gap-4 text-4xl md:text-5xl  md:flex-col md:gap-0 md:pl-0 flex-1 h-fit items-start md:items-end border-solid md:border-r border-slate-800 pr-6' >
                <Image src={data.logo} alt='Logo' className="md:size-24 size-20" />
                <div>
                    <h1 className="md:text-4xl text-3xl font-semibold mt-3">
                        {data.companyName}
                    </h1>
                    <h3 className="md:text-xl text-lg text-slate-400 justify-start flex md:justify-end">
                        {data.location}
                    </h3>
                </div>
            </div>

            {/* info */}
            <div data-aos="fade-up" data-aos-delay="150" className="flex items-start flex-1 flex-col gap-1">
                {/* title duration */}
                <div>
                    <h3 className="text-xl md:text-3xl font-black " data-aos="fade-up" data-aos-delay="150">
                        {data.position}
                    </h3>
                    <h4 className="text-base md:text-lg font-light text-slate-400 mb-3 " >
                        {data.duration}
                    </h4>
                </div>
                {/* description client technologies  */}
                <div className="flex gap-3 flex-col  text-lg">
                    <div className="flex flex-col flex-wrap pr-4">
                        {data.description.map((item, index) =>
                            <p key={index} data-aos="fade-up" data-aos-delay={200 + (50 * index)} className="text-base text-slate-200 mb-1 font-light ">
                                • {item}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h4 className="text-lg font-semibold text-slate-100 my-2 " data-aos="fade-up" data-aos-delay="400">Worked for clients via {data.companyName}: </h4>
                        <div className="flex gap-3 ">
                            {data.client && data.client.map((client,index) =>
                                <Link key={client.name} data-aos="fade-up" data-aos-delay={450 + (25 * index)} href={client.url} target="_blank">
                                    <Image src={client.logo} alt={client.name} className="size-10 object-contain" />
                                </Link>
                            )}
                        </div>
                    </div>
                    <h5 className="text-slate-200 text-base " data-aos="fade-up" data-aos-delay="400">
                        <span className="font-semibold">Technologies: </span> <span className="text-slate-200 font-light">{data.technologies.join(", ")}</span>
                    </h5>
                </div>
            </div>
        </div >
    )
}

export default ExprienceCard