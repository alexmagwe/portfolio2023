import { getPost } from '@/lib/getPosts'
import { urlFor } from '@/lib/sanity.client'
import React from 'react'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Metadata } from 'next'
type Props = {
    params: {
        id: string
    }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPost(params.id)
    return { title: post.title }
}
async function page({ params }: Props) {
    const post = await getPost(params.id)
    const imageUrl = urlFor(post.mainImage).url() as string

    return (
        <div className="px-12 lg:px-32 lg:py-16 flex flex-col items-center gap-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                {post.title}
            </h1>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    width={300}
                    height={300}
                    alt={post.slug.current}
                />
            )}
            <div className="leading-6 dark:text-slate-100 ">
                {post.body && <ReactMarkdown>{post.body}</ReactMarkdown>}
            </div>
        </div>
    )
}

export default page
