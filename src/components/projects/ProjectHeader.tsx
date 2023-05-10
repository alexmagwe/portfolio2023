'use client'
import React, { useEffect } from 'react'

type Props = {}
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ProjectHeader({}: Props) {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])
    const variant1 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }
    const variant2 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 3 } },
    }
    return (
        <div ref={ref}>
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={variant1}
                className="font-header font-semibold  text-2xl sm:text-4xl text-center"
            >
                Some of my Projects
            </motion.h2>
            <motion.h3
                initial="hidden"
                animate={controls}
                variants={variant2}
                className="font-header  mx-auto w-1/2  text-md pt-6 text-center"
            >
                I&apos;ve worked on alot of projects over the years but these
                ones are the ones that im most proud of, Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
            </motion.h3>
        </div>
    )
}
