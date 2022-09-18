import React from 'react'
import { Categories, PostCard } from '../../components';
import { getCategories, GetCategoriesPosts } from '../../services'

const CategoryPosts = ({posts}) => {
    return (


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1  p-8">

{
  posts?.map((post,index)=>(
  
 <PostCard post={post} key={post.title}>
 </PostCard>

  ))
}
        </div>
<div className="lg:col-span-4 col-span-1 ">
<div className="lg:sticky relative top-8 p-8">
<Categories></Categories>
</div>
</div> 
      </div>
  )
}

export default CategoryPosts


export async function getStaticProps({params}){
    const data=await GetCategoriesPosts(params.slug)
      
        return {
          props:{posts:data}
        }
      }
      export async function getStaticPaths() {
        const categories = await getCategories();
        return {
          paths: categories.map(({ slug }) => ({ params: { slug } })),
          fallback: true,
        };
      }