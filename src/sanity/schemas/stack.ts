import { defineType } from "sanity";
export default defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
	{
	name:"skillLevel",
	title:"Skill Level",
	type:"string"
	},
	 {
	 name:"category",
	 title:"Category",
	 type:"reference",
	to:[{type:"category"}],
	 }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnail',
    },
  },
})
