import { env } from './env'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import {createClient} from 'next-sanity'

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = env.NEXT_PUBLIC_SANITY_PROJECT_DATASET
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION 
export const sanityClient = createClient({projectId, dataset, apiVersion,useCdn:true})
//for queries api directly
//export const sanityClient = createClient({projectId, dataset, apiVersion,useCdn:true,token:process.env.NEXT_PUBLIC_SANITY_TOKEN})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source:SanityImageSource) {
  return builder.image(source)
}