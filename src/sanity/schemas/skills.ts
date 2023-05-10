import { defineType } from "sanity";
export default defineType({
	name:'skills',
	title:'Skills',
	type:'document',
	fields:[
	    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',		
      options: {
        hotspot: true,
      },
    },
	
	]



})
