import React from 'react'

import Skill from './ui/skills'

import ReactLogo from "../../svg/react.svg"
import NextLogo from "../../svg/next.svg"
import NodeLogo from "../../svg/nodejs.svg"
import TailwindLogo from "../../svg/tailwindcss.svg"
import ReduxLogo from "../../svg/redux.svg"
import WebpackLogo from "../../svg/webpack.svg"
import NestLogo from "../../svg/nestjs.svg"
import ESBuildLogo from "../../svg/esbuild.svg"
import ExpressLogo from "../../svg/express.svg"
import SassLogo from "../../svg/sass.svg"
import JSLogo from "../../svg/javascript.svg"
import TSLogo from "../../svg/typescript.svg"
import RustLogo from "../../svg/rust.svg"
import AWSLogo from "../../svg/aws.svg"
import PostgresqlLogo from "../../svg/postgresql.svg"

const Skills = () => {
    return (
        <div data-aos="slide-up" className='px-6 md:pt-28 md:pl-14 md:pr-14 flex flex-col gap-11'>
            <div>
                <h1 className='text-4xl lg:text-5xl  font-bold'>Skills 💻</h1>
            </div>
            <div className='flex flex-col lg:gap-9 gap-4'>
                <div>
                    <h1 className='text-3xl lg:text-4xl' >
                        Frontend
                        <div className='flex flex-wrap lg:gap-11 gap-7' >
                            <Skill logo={ReactLogo} title='React Js' />
                            <Skill logo={NextLogo} title='Next Js' />
                            <Skill logo={ReduxLogo} title='Redux' />
                            <Skill logo={TailwindLogo} title='Tailwind CSS' />
                            <Skill logo={SassLogo} title='Sass' />
                            <Skill logo={WebpackLogo} title='Webpack' />
                            <Skill logo={ESBuildLogo} title='ESBuild' />
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-3xl lg:text-4xl' >
                        Backend
                        <div className='flex flex-wrap gap-7' >
                            <Skill logo={NodeLogo} title='Node Js' />
                            <Skill logo={ExpressLogo} title='Express Js' />
                            <Skill logo={NestLogo} title='Nest Js' />
                            <Skill logo={AWSLogo} title='AWS' />
                            <Skill logo={PostgresqlLogo} title='PostgreSQL' />
                        </div>
                    </h1>
                </div>
                <div>
                    <h1 className='text-3xl lg:text-4xl' >
                        Language
                        <div className='flex flex-wrap gap-7' >
                            <Skill logo={JSLogo} title='Javascript' />
                            <Skill logo={TSLogo} title='Typescript' />
                            <Skill logo={RustLogo} title='Rust' />
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Skills