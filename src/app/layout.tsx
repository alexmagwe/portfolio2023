import NavBar from '@/components/NavBar'
import React from 'react'
import '@/styles/globals.css'
type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <html lang="en">
            <body className="text-secondary bg-secondary dark:text-white/80">
                <NavBar />
                {children}
            </body>
        </html>
    )
}

export default layout
