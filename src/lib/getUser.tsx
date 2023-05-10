import { env } from '@/lib/env'
import 'server-only'
export type User = {
    name: string
    bio: string
    title: string
    socials: any[]
    profilePicture: object
    about: string
}
export async function getUser(): Promise<User> {
    const userQuery = encodeURIComponent(
        `*[_type=="user"]{name,bio,about,title,profilePicture,socials[]->}`
    )
    const usersUrl = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}?query=${userQuery}`
    const userResp = await fetch(usersUrl, { next: { revalidate: 60 } }).then(
        (res) => res.json()
    )
    const users: User[] = userResp.result
    return users && users[0]
}
