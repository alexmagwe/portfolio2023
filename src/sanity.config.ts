import { schemaTypes } from '@/sanity/schemas'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {markdownSchema} from 'sanity-plugin-markdown'
import { visionTool } from '@sanity/vision'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!
console.log(projectId,dataset)
export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId,
  dataset,
  plugins: [deskTool(),markdownSchema(),visionTool()],
  schema: {
    types: schemaTypes,
  },
})