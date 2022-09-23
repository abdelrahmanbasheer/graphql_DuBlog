
import  Link  from "next/link"
import { useState,useEffect } from 'react'
import {getSpecialize} from '../services'
const Header = () => {
    const [specializations, setSpecializations] = useState([])

  useEffect(() => {
    
    getSpecialize().then((specialize)=>setSpecializations(specialize))
  
  }, [])
 return (
        <div className='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-white py-8">
            <div className="md:float-left block">
                <Link href="/">
                <span className='cursor-pointer font-bold text-4xl text-white transition ease duration-500 hover:text-blue-300'>CCIT <br /> <span className="text-xl">from students to students</span></span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents ">
            {
                specializations.map((specialization)=>(
                    <Link key={specialization.slug} href={`/specialization/${specialization.slug}`}>
                        <span className='md:float-right mt-8 align-middle text-white ml-4 font-semibold cursor-pointer transition ease duration-500 hover:text-blue-300 '>
                            {specialization.subname}
                        </span>
                    </Link>
                ))
            }

            </div>
        </div>

    </div>
  )
}

export default Header