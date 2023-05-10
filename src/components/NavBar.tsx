import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBar({}: Props) {
    return (
        <div className="flex sticky top-0 z-50 backdrop-blur-xl bg-secondary/50 justify-center items-center p-2 py-4 ">
            <ul className="flex gap-4">
                <li className="py-2">
                    <Link
                        href="/"
                        className="font-header font-semibold text-white  pt-0.5 cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        href="/blog"
                        className="font-header font-semibold text-white  pt-0.5 cursor-pointer"
                    >
                        Blog
                    </Link>
                </li>

                <li className="py-2">
                    <a
                        href="/#projects"
                        className="font-header font-semibold text-white  pt-0.5 cursor-pointer"
                    >
                        Projects
                    </a>
                </li>
                <li className="py-2">
                    <a
                        href="https://drive.google.com/file/d/1AMLwmBCv9Y9AU5nQbC0vmyi7EKBaXwWR/view?usp=sharing"
                        target={'_blank'}
                        className="font-header font-semibold text-white  pt-0.5 cursor-pointer"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
