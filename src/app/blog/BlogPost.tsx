import { PostType } from '@/lib/getPosts'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import ReactMarkdown from 'react-markdown'

type Props = {
    post: PostType
}

function BlogPost({ post }: Props) {
    const mainImage = urlFor(post.mainImage).url() as string
    return (
        <div className="flex gap-4 group ">
            <div className="overflow-clip ">
                <Image
                    className="w-48 h-auto group-hover:scale-125 duration-300"
                    src={mainImage}
                    alt={post.title}
                    width={200}
                    height={200}
                />
            </div>
            <div className="py-2">
                <h1 className="text-2xl lg:text-3xl text-white/90 font-bold">
                    {post.title}
                </h1>
                <ReactMarkdown className="line-clamp-3">
                    {post.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default BlogPost
