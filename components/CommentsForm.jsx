import React,{useState,useEffect,useRef} from 'react'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl=useRef()
  const name =useRef()
  const emailEl=useRef()
  const storeDataEl=useRef()
  const handleCommentSubmission=()=>{
setError(false)
  setError(false);
    const {value:comment}=commentEl.current
    const {value:name}=name.current
    const {value:email}=emailEl.current
    const {checked:storeData}=storeDataEl.current
    if (!name || !email || !comment) {
      setError(true);
      return; 
    }

    const commentObj={
      name,email,comment,slug
    }
    if(storeData){
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
    }
    else{
      localStorage.removeItem("name",name);
      localStorage.removeItem("email",email);
    
    }
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 '>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comments Form</h3>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <textarea placeholder='Comment' name='comment'  ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input type="text" ref={name} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Name' name='Name' />
        <input type="text" ref={emailEl} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Email' name='Email' />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="">
          <input type="checkbox" ref={storeDataEl} id="storeData" name='storeData' value="true" />
          <label htmlFor="storeData" className='text-gray-500 cursor-pointer capitalize ml-2'>save my email and name for the next time i comment</label>
        </div>
      </div>
      {error &&<p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8 ">
        <button type='button' onClick={handleCommentSubmission} className=" transition  duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage &&<span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment Submited for review !</span>}
      </div>
    </div>
  )
}

export default CommentsForm