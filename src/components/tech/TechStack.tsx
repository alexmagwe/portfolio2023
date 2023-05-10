/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Technology from './Technology'

type Props = {
    technology: any[]
}

function TechStack(props: Props) {
    let tech = props.technology

    return (
        <div className="flex gap-1 flex-wrap  text-white">
            {tech ? (
                tech.map((l, i) => <Technology key={i} tech={l} />)
            ) : (
                <span className="text-2xl text-white">Loading...</span>
            )}
        </div>
    )
}

export default TechStack
