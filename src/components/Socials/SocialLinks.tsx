import React from 'react'

import SocialLink from './SocialLink'
import { getUser } from '@/lib/getUser'
type Props = {}

async function SocialLinks({}: Props) {
    const { socials } = await getUser()

    return (
        <>
            {socials &&
                socials.map((social, i) => (
                    <SocialLink
                        key={i}
                        link={social.link}
                        name={social.name}
                        icon={social.icon}
                    />
                ))}
        </>
    )
}

export default SocialLinks
