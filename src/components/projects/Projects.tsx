import React from 'react'
import Project from './Project'
import { getProjects } from '@/lib/getProjects'
import ProjectHeader from './ProjectHeader'

type Props = {}

async function Projects(props: Props) {
    const projects = await getProjects()

    return (
        <div id="projects" className="container py-16 md:py-20">
            <ProjectHeader />
            <div className="w-full sm:w-3/4 lg:w-full mx-auto  md:columns-2 lg:columns-3 gap-8 md:gap-10 pt-16">
                {projects &&
                    projects.map((project, i) => (
                        <div className="my-4" key={i}>
                            {<Project project={project} />}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Projects
