import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "motion/react"
const Card = ({data,refrence}) => {
  return (
   <motion.div drag dragConstraints={refrence} whileDrag={{scale:"1.1",cursor:"grab", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)"}} dragElastic={0.2} dragTransition={{
    bounceStiffness: 500,
    bounceDamping: 20,
  }} className="flex-shrink-0 bg-black/50 w-52 rounded-[50px] px-5 py-10 h-72 relative text-white overflow-hidden">
    <FaFileAlt />
    <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
    <div className="footer  w-full absolute bottom-0 left-0 ">
        <div className='flex items-center px-5 pb-5 justify-between'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close?<IoIosCloseCircle /> :<GoDownload size='1em' color='#fff' />}
            </span> 
        </div>
        {data.tag.isOpen && ( <div className={`tag w-full flex items-center justify-center py-4 ${data.tag.tagColor==="blue"?"bg-blue-900" : "bg-green-600"}`}>
        <h3 className='text-sm font-semibold'>{data.tag.TagTitle}</h3>
        </div>)}
       
      
    </div>
    </motion.div>
  )
}

export default Card