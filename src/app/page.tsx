import Landing from '@/components/hero/Landing'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: 'Alex Magwe ',
    description:
        'Alex Magwe is a fullstack software developer based in Nairobi, portfolio,skills,projects and blog',
}

function page({}: Props) {
    return (
        <main className="  ">
            <div className="relative w-full ">
                {/* <div className="h-screen absolute inset-0 z-20"></div> */}
                <Landing />
            </div>
            <div>
                {/* <AboutMe /> */}
                {/* @ts-expect-error Async Server Component */}

                <Skills />
                {/* <Stack /> */}
                {/* @ts-expect-error Async Server Component */}
                <Projects />
            </div>
        </main>
    )
}

export default page
