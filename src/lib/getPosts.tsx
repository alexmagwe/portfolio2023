import { env } from './env'
import 'server-only'

export interface PostType {
    body: string
    mainImage: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
            // you may want to define more properties for the asset object
        }
        // you may want to define more properties for the mainImage object
    }
    categories: Category[]
    _id: string
    title: string
    slug: {
        current: string
        _type: 'slug'
        // you may want to define more properties for the slug object
    }
}

interface Category {
    // you may want to define more properties for the category object
    title: string
}

export async function getPosts(): Promise<PostType[]> {
    const postsQuery = encodeURIComponent(
        `*[_type=="post"]{_id, title, slug, body, mainImage, categories[]->{title}}`
    )
    const postsUrl = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}?query=${postsQuery}`
    const postsResp = await fetch(postsUrl, { next: { revalidate: 60 } }).then(
        (res) => res.json()
    )
    const posts: PostType[] = postsResp.result
    return posts
}
export async function getPost(id: string): Promise<PostType> {
    const postQuery = encodeURIComponent(
        `*[_type=="post" &&_id=="${id}"]{_id, title, slug, body, mainImage, categories[]->{title}}`
    )
    const postUrl = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}?query=${postQuery}`
    const postsResp = await fetch(postUrl, { next: { revalidate: 60 } }).then(
        (res) => res.json()
    )
    const posts: PostType[] = postsResp.result
    return posts[0]
}
