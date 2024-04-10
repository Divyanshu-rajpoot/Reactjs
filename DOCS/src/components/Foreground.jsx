import React, { useRef, useState } from 'react'
import Card from './Card'



function Foreground() {

    const refer = useRef(null); 

    const data = [
        {
            desc:"my name is divyanshu rajpoot hello there!!",
            filesize:".9mb",
            close:true,
            tag:{isopen:true , tagtitle: "Download Now" , tagcolor:"blue"}
        },
        {
            desc:"my name is divyanshu rajpoot hello there!!",
            filesize:".9mb",
            close:true,
            tag:{isopen:true , tagtitle: "Download Now" , tagcolor:"green"}
        },
        {
            desc:"my name is divyanshu rajpoot hello there!!",
            filesize:".9mb",
            close:true,
            tag:{isopen:true , tagtitle: "Download Now" , tagcolor:"green"}
        }
    ]


  return (
    <>
        <div ref={refer} className='p-5 flex gap-9 flex-wrap fixed top-0 left-0 z-[3] w-full h-full bg-zinc-400/10'>
            {data.map((items , index)=>(
                <Card data={items} reference={refer}/>
            ))}
        </div>
    </>

  )
}

export default Foreground