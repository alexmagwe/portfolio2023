/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Skill from './Skill'
import { getSkills } from '@/lib/getSkills'

type Props = {}

async function Skills(props: Props) {
    const skills = await getSkills()

    return (
        <div className="container py-16 md:py-20 " id="services">
            <h2 className="font-header mb-8 font-semibold text-4xl  text-center">
                Some jargon i have learned over the years
            </h2>

            <div className="w-full overflow-clip    ">
                <div className="flex w-[200%] animate-slider gap-6">
                    <div className="w-full justify-between items-center flex gap-6">
                        {skills &&
                            skills.length > 0 &&
                            skills
                                .slice(0, skills.length / 2)
                                .map((skill, i: number) => (
                                    <div key={i}>
                                        <Skill skill={skill} />
                                    </div>
                                ))}
                    </div>
                    <div className="w-full justify-between items-center flex gap-6">
                        {skills &&
                            skills.length > 0 &&
                            skills
                                .slice(0, skills.length / 2)
                                .map((skill, i: number) => (
                                    <div key={i}>
                                        <Skill skill={skill} />
                                    </div>
                                ))}
                    </div>
                </div>
                <div className="flex w-[200%] animate-slider-reverse gap-6 md:gap-10 pt-10 md:pt-12">
                    <div className="w-full justify-between items-center flex gap-6">
                        {skills &&
                            skills.length > 0 &&
                            skills
                                .slice(skills.length / 2, -1)
                                .map((skill, i: number) => (
                                    <div key={i}>
                                        <Skill skill={skill} />
                                    </div>
                                ))}
                    </div>
                    <div className="w-full justify-between items-center flex gap-6">
                        {skills &&
                            skills.length > 0 &&
                            skills
                                .slice(skills.length / 2, -1)
                                .map((skill, i: number) => (
                                    <div key={i}>
                                        <Skill skill={skill} />
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
