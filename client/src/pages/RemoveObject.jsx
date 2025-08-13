import { Eraser, Scissors, Sparkles } from 'lucide-react'
import React from 'react'
import {useState} from 'react'
const RemoveObject = () => {

  const [setInput] = useState('')
  const [object, setObject] = useState('')

  const onSubmitHandler = async(e)=> {
    e.preventDefalut();
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/*left Col*/ }
      <form  onSubmit = {onSubmitHandler}className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex item-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]'/>
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload Image</p>

        <input onChange={(e)=> setInput(e.target.files[0])} accept='image/*' type="file" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 hover:border-[#65ADFF] shadow text-gray-600' required />
       
        <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG, PNG, and other Image Formats</p>

        <p className='mt-6 text-sm font-medium'>Descibe Object to be Removed</p>

      <textarea onChange={(e)=> setObject(e.target.value)} value={object} rows={4} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 hover:border-[#65ADFF] shadow' placeholder='e.g., watch or spoon, only single object name' required />

        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Scissors
           className='w-5'/>
          Remove Object
        </button>

        
      </form>
      {/*Right Col*/ }
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#4A7AFF]'/>
          <h1 className='text-xl font-semibold'>Processed Image</h1>

        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='w-9 h-9'/>
            <p className='justify-center item-center flex'>Upload an Image and Click "Remove Object" to get Started </p>
          </div>

        </div>
       
      </div>

    </div>
  )
  
}

export default RemoveObject
