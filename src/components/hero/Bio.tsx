'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { User } from '@/lib/getUser'
type Props = {
    user: User
}
export function Bio({ user }: Props) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-body leading-relaxed"
        >
            <h4
                className="font-header 
            font-medium text-xl  2xl:text-2xl "
            >
                {user.bio
                    ? user.bio
                    : "I'm Alex Magwe, a Full stack Developer, Embedded System engineer & Entreprenuer"}
            </h4>
            {/* <PortableText value={currentUser.about}/> */}
        </motion.div>
    )
}
