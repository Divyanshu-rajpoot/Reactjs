import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({ data , reference }) {
    return (
        <motion.div whileDrag={{scale:1.1}} dragElastic={0.2} drag dragConstraints={reference} className=' flex-shrink-0 relative w-56 h-72 rounded-3xl bg-zinc-900/90 text-white px-5 py-10 overflow-hidden '>
            <FaRegFileAlt />
            <p className='text-sm mt-3 font-medium leading-tight '>{data.desc} </p>
            <div className="footer absolute bottom-0 px6 mb-12 w-full h-12 left-0">
                <div className='flex items-center justify-between px-6 py-4'>
                    <h5>{data.filesize} </h5>
                    <span className=' w-7 h-7 rounded-full flex items-center justify-center bg-zinc-400'>
                        {data.close ? <IoClose /> : <MdOutlineFileDownload />}
                    </span>
                </div>
                {data.tag.isopen && (
                    <div className={`tag w-full h-10 ${data.tag.tagcolor === "blue" ? "bg-sky-700" : " bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-md font-semibold '>{data.tag.tagtitle}</h3>
                    </div>
                )}

            </div>
        </motion.div>
    )
}

export default Card