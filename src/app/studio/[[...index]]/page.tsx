import Studio from './Studio'
export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
    //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
    return <Studio />
}
