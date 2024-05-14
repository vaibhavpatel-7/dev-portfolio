import Image from "next/image"

import THLogo from "../../../svg/nestjs.svg"
import { IExprienceData } from "../work-exprience"

interface IProps {
    data: IExprienceData,
    index: number
}

const ExprienceCard = ({ data, index }: IProps) => {
    return (
        <div className={`flex items-center w-full gap-7 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            {/* logo */}
            <div className='flex flex-row gap-4 md:gap-0 pl-3 md:pl-0 md:flex-col flex-1 h-fit items-start md:items-end border-solid md:border-r border-slate-800 pr-6' >
                <Image src={data.logo} alt='Logo' className="size-24" />
                <h1 className="text-4xl font-semibold mt-3">
                    {data.companyName}
                </h1>
                <h3 className="text-xl text-slate-400">
                    {data.location}
                </h3>
            </div>

            {/* info */}
            <div className="flex items-start flex-1 flex-col gap-7">
                <h1 className="text-4xl font-semibold">
                    {data.position}
                </h1>
                <h3>
                    {data.duration}
                </h3>
                <div className="flex gap-5 flex-col w-3/4 text-lg">
                    <p>
                        {data.description}  </p>
                    <h5 className="text-slate-200 text-xl">
                        <span className="font-semibold">Technologies:</span> <span className="italic text-slate-400">{data.technologies.join(", ")}</span>
                    </h5>
                </div>
            </div>
        </div >
    )
}

export default ExprienceCard