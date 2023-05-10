import { defineType } from "sanity";
export default defineType( {
    name:'user',
    title:'User',
    type:'document',
    fields:[
        {
        name:'name',
        title:'Name',
        type:'string'
    },
        {
        name:'email',
        title:'Email',
        type:'string'
    },
        {
        name:'phone',
        title:'Phone Number',
        type:'string'
    },
        {
        name:'bio',
        title:'Bio',
        type:'text'
    },
        {
        name:'title',
        title:'Title',
        type:'string'
    },
 
    {
        name:'profilePicture',
        title:'ProfilePicture',
        type:'image',
        options:{
            hotspot:true
        }
    },
    
    {
        name:'socials',
        title:'Social Links',
        type:'array',
        of:[{type:'reference',to:{type:'socialLinks'}}]
    },

    {
        name:'about',
        title:'About',
        type:'text'
    },


    ]
})