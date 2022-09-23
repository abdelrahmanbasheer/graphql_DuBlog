import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import { getSpecialize } from '../services'

const Categories = () => {
  const [specializations, setSpecializations] = useState([])

  useEffect(() => {
    
    getSpecialize().then((specialize)=>setSpecializations(specialize))
  
  }, [])

  return (
    <div className='bg-gradient-to-t from-blue-200 to-gray-200 opacity-90 transition ease duration-500 hover:opacity-100 shadow-lg rounded-lg p-8 mb-8 pb-12 '>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
        Specializations
      </h3>
      {specializations.map((specialization)=>(
        <Link key={specialization.slug} href={`/specialization/${specialization.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 transition ease duration-500 hover:text-blue-400'>
            {specialization.name}</span>
        </Link>
      ))}
      </div>
  )
}

export default Categories