import {z} from "zod"
import 'server-only'
const schema=z.object({
    NEXT_PUBLIC_SANITY_PROJECT_ID:z.string(),
    NEXT_PUBLIC_SANITY_PROJECT_DATASET:z.string(),
    NEXT_PUBLIC_SANITY_API_VERSION:z.string(),

})
const parsed=schema.safeParse(process.env)
if(!parsed.success){
    console.error(parsed.error.errors.join(","))
    throw new Error("Failed to parse env")
}
export const env=parsed.data