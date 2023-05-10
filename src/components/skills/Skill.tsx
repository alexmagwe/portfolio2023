/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import { Skill } from '@/lib/getSkills'
type Props = {
    skill: Skill
}

function Skill({ skill }: Props) {
    const imageUrl = skill.thumbnail
        ? (urlFor(skill.thumbnail).url() as string)
        : null

    return (
        <div className="shadow flex p-4 items-center gap-4  hover:shadow-lg group rounded relative">
            <div className="text-center">
                {imageUrl ? (
                    <Image
                        className="absolue top-0 left-0 w-6 h-8 bg-cover rounded-full object-cover  "
                        width={100}
                        height={100}
                        src={imageUrl}
                        alt="content marketing icon"
                    />
                ) : null}
            </div>
            <div className="text-center">
                <h3 className="font-semibold text-lg lg:text-xl text-slate-200/80 uppercase ">
                    {skill.name}
                </h3>
                {/* <p className="text-sm md:text-base text-grey pt-4 ">
                    {skill.skillLevel}
                </p> */}
            </div>
        </div>
    )
}

export default Skill
