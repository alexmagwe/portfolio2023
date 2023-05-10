import 'server-only'
import { env } from './env'
export interface Skill {
    name: string
    _type: 'stack'
    _id: string
    _updatedAt: string
    skillLevel: 'beginner' | 'intermediate' | 'experienced'
    thumbnail: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
        }
    }
    _createdAt: string
    category: Category
    _rev: string
}

interface Category {
    title: string
}

export async function getSkills(): Promise<Skill[]> {
    const stackQuery = encodeURIComponent(
        `*[_type=="stack"]{...,category->{title}}`
    )
    const stackUrl = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}?query=${stackQuery}`
    const skills = await fetch(stackUrl, { next: { revalidate: 86400 } }).then(
        (res) => res.json()
    )
    return skills.result
}
