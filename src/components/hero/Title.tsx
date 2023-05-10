'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { User } from '@/lib/getUser'
type Props = {
    user: User
}
export function Title({ user }: Props) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    return (
        <div>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                className="font-header text-yellow/80 text-5xl 2xl:text-6xl text-center"
            >
                {user.name}
            </motion.h1>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                className="font-header my-3 text-slate-100/50 text-2xl 2xl:text-6xl text-center"
            >
                {user.title}
            </motion.h1>
        </div>
    )
}
