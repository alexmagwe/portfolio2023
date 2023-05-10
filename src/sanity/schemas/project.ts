import { defineType } from "sanity";
export default defineType( {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'webLink',
      title: 'Project link',
      type: 'url',
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'reference',to:{type:'stack'}}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      stack:'languages'
    },
    prepare(selection:any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
})
