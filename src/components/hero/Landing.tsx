/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
type Props = {}

function Landing({}: Props) {
    return (
        <div>
            <div className="z-10 relative w-full h-screen">
                <div className="h-full grid xl:grid-cols-3">
                    <div className="md:col-start-2">
                        {/* @ts-expect-error Async Server Component */}
                        <Introduction />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
