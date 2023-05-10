// First, we must import the schema creato// We import object and document schemas
import category from './category'
import project from './project'
import post from './post'
import stack from './stack'
import user from './User'
import socialLinks from './socialLinks'
import skills from './skills'
// Then we give our schema to the builder and provide the result to Sanit
export const schemaTypes=[
    // The following are document types which will appear
    // in the studio.
    project,
    stack,
    skills,
    category,
    user,
    post,
    socialLinks,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]