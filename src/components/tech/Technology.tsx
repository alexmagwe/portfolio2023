/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
type Props = {
    tech: any
}

function Technology({ tech }: Props) {
    const imageUrl = urlFor(tech.thumbnail).url() as string

    return (
        <p className="flex gap-2 items-center p-2 shadow-sm justify-between rounded-md">
            <span className="w-4 h-4">
                {imageUrl ? (
                    <Image
                        width={50}
                        height={50}
                        className=" rounded-full object-cover w-full h-full"
                        src={imageUrl}
                        alt=""
                    />
                ) : null}
            </span>
            <span className="text-grey-60 text-sm ">{tech.name}</span>
        </p>
    )
}

export default Technology
