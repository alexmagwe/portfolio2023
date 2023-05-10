'use client'
import { Project } from '@/lib/getProjects'
import { PortableText } from '@portabletext/react'
import React from 'react'

type Props = {
    description: Project['description']
}

function ProjectDescription({ description }: Props) {
    return <PortableText value={description} />
}

export default ProjectDescription
