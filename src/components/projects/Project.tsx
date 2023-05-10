/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Links from './Links'
import TechStack from '../tech/TechStack'
import { urlFor } from '@/lib/sanity.client'
import { Project } from '@/lib/getProjects'
import ProjectDescription from './ProjectDescription'
import Image from 'next/image'
type Props = {
    project: Project
}

function Project({ project }: Props) {
    const image = urlFor(project.mainImage).url() as string

    return (
        <div className="flex animate-in fade-in-25 duration-600 flex-col gap-2 w-full  group text-slate-200 overflow-hidden shadow-md  bg-black/50 rounded-2xl relative justify-start">
            <div className="">
                <Image
                    width={600}
                    height={600}
                    src={image}
                    className=" h-full aspect-auto object-cover z-1 transition-all duration-300 "
                    alt=""
                />
            </div>
            <div className="w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black/80 absolute z-20"></div>
            <div className="flex w-full py-3 px-6  abslute bottom-0  flex-col z-30 text-center gap-2">
                <div className=" duration-300 text-lg font-body text-left ">
                    <ProjectDescription description={project.description} />
                </div>
                <TechStack technology={project.technology} />
                <Links
                    githubLink={project.githubLink}
                    webLink={project.webLink}
                />
            </div>

            {/* <p className='text-white text-lg p-8'>
          
        </p> */}
        </div>
    )
}

export default Project
