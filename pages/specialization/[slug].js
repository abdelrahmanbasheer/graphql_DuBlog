import React, { useEffect, useState } from 'react'
import { Categories, PostCard } from '../../components';
import {useRouter} from "next/router"
import { getSpecPosts } from '../../services';


const CategoryPosts = () => {
  const router = useRouter();
  const currentSpec=router.query.slug
  const [week, setWeek] = useState("1")
  const [term, setTerm] = useState("5")
  const [posts, setPosts] = useState([])

  useEffect(() => {
   
      getSpecPosts(week.toLocaleString(),term.toLocaleString(),currentSpec).then((pos)=>{setPosts(pos)})
    
   
  }, [week,term])

  useEffect(()=>{
setWeek("1")
setTerm("5")
setPosts([])
  },[currentSpec])
  
    return (
      <div className="">
           <div className="pb-4">
           <h1 className='bg-gradient-to-l from-white to-gray-300 bg-clip-text text-transparent font-semibold text-4xl text-center uppercase'>{currentSpec}</h1>
           </div>
              <div className="m-4 flex gap-3 justify-center">
                <label htmlFor="week" className='text-white font-semibold mt-1'>Week</label>
                <select onChange={(e)=>setWeek(e.target.value)} name="week" id="week" className='block p-2 mb-6 w-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
                <label htmlFor="term" className='text-white font-semibold mt-1'>Term</label>
                <select name="term" onChange={(e)=>setTerm(e.target.value)} id="term" className='block p-2 mb-6 w-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                </select>
              </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1  p-8">
          {posts.length !=0 ? 
          
          posts.map((post)=> <PostCard post={post} key={post.title}></PostCard>)
          :

          <h1 className='bg-gradient-to-l from-white to-gray-300 bg-clip-text text-transparent font-semibold text-2xl text-center uppercase'>nothing found</h1>}
  
        </div>
<div className="lg:col-span-4 col-span-1 ">
<div className="lg:sticky relative top-8 p-8">
<Categories></Categories>
</div>
</div> 
      </div>
      </div>
  )
}

export default CategoryPosts






