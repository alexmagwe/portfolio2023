import { getPosts } from '@/lib/getPosts'
import React from 'react'
import Post from './BlogPost'
import BlogPost from './BlogPost'
import Link from 'next/link'
import { Metadata } from 'next'
type Props = {}
export const metadata: Metadata = {
    title: "Alex Magwe's Blog",
    description:
        'Alex Magwe writes about software development and other things',
}

async function page({}: Props) {
    const posts = await getPosts()

    return (
        <div className="container py-8 md:py-16 flex flex-col items-center">
            {posts.length > 0 &&
                posts.map((post, i) => (
                    <Link key={i} href={`/blog/${post._id}`}>
                        <BlogPost post={post} />
                    </Link>
                ))}
        </div>
    )
}

export default page
