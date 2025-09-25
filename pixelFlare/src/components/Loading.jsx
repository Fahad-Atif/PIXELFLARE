import React from 'react'

function Loading() {
  return (
    <div  className='flex items-center justify-center h-70'>
      <div className='w-10 h-10 border-3 rounded-full border-green-400 animate-spin scale-150 border-t-transparent  ' ></div>
    </div>
  )
}

export default Loading