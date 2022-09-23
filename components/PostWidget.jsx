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
    <div className='bg-gradient-to-b from-blue-200 to-gray-200 opacity-90 transition ease duration-500 hover:opacity-100 shadow-lg rounded-lg p-8 mb-8 '>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
        Announcements
      </h3>
    </div>
  )
}

export default PostWidget