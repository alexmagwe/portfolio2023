import { defineType } from "sanity";
export default defineType({
    name:'socialLinks',
    title:'Social Links',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Social Name',
            type:'string'
        },{
            name:'link',
            title:'Social Link',
            type:'url'
        },{
            name:'icon',
            title:'Icon',
            type:'image',
            options:{
                hotspot:true,
            }
        }
    ]
})