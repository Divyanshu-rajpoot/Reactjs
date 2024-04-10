import React from 'react'

function Background() {
  return (
    <>
    <div className=' z-[2] w-full h-screen fixed'></div>
    <div className='w-full py-10 flex justify-center text-zinc-700 font-semibold text-xl absolute top-[5%] '>Document</div>
      <h1 className=' top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold absolute text-[12vw] leading-none tracking-tighter text-zinc-900'>Docs</h1>
    </>
  )
}

export default Background