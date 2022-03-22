import {  } from '@sanity/client'

export interface IPost {
    title : string,
    slug : {
        current:string
    },
    mainImage: string,
    body: any
}

export interface AboutPost{
    slug: {
        current: string,
    },
        image: string,
        title: string,
        subTitle: string,
        body: any,
        authorImage: string,
        authorName: string,
        authorProfile: string,
        bodyContent: any
    }

    export interface IDetail{
        title: string,
        slug: {
            current: string,
        },
        beforeContent: any,
        blogImage: string,
        afterContent: any,
    }

   export interface IAuthor {
       name: string,
       slug: {
           current: string,
       },
       image: string,
       bio: any,
   }