import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts,getSimilarPosts } from '../services'
import Image from 'next/image'
const PostWidget = ({categories,slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    setRelatedPosts([])
    if(slug){
      getSimilarPosts(categories,slug).then((result)=>setRelatedPosts(result))
    }
    else{
    getRecentPosts().then((result)=>setRelatedPosts(result))
    }
  }, [slug])
  
  return (
    <div className='bg-white opacity-90 transition ease duration-500 hover:opacity-100 shadow-lg rounded-lg p-8 mb-8 '>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
        {slug ? "Related Posts":"Recent Posts"}
      </h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className="flex items-center w-full mb-4 ">
          <div className="w-16 flex-none">
            <Image src={post.featuredImage.url}alt={post.title} height="60px" width="60px" className=' align-middle rounded-full' />
          </div>
          <div className="flex-grow ml-4">
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} 
            color="white">
              <span className="transition ease duration-500 hover:text-blue-400 cursor-pointer">{post.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget