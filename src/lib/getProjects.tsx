import { env } from '@/lib/env'
import 'server-only'

export type Project = {
    title: string
    description: any[]
    technology: any[]
    mainImage: object
    webLink: string
    githubLink: string
}
export async function getProjects(): Promise<Project[]> {
    const projectQuery = encodeURIComponent(
        `*[_type=="project"]{...,technology[]->}`
    )
    const projectUrl = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}?query=${projectQuery}`
    const projectResp = await fetch(projectUrl, {
        next: { revalidate: 86400 },
    }).then((res) => res.json())
    return projectResp.result
}
