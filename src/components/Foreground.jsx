import React, { useRef } from 'react'
import Card  from './Card'
const Foreground = () => {
    const ranmWords = ["Download","Upload"]
    const ref = useRef(null)
    const data = [
        {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        filesize:".9mb",
        close:"true",
        tag:{isOpen:true,TagTitle:"Download Now", tagColor:"blue"}
    },
    {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        filesize:".9mb",
        close:"true",
        tag:{isOpen:false,TagTitle:"Download Now", tagColor:"green"}
    },
    {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        filesize:".9mb",
        close:"true",
        tag:{isOpen:true,TagTitle:`${ranmWords}`, tagColor:"green"}
    },
]
  return (
      <>
      <div ref={ref} className="fixed p-5 flex gap-10 flex-wrap h-full top-0 left-0 bg-sky-800/20 w-full z-[3]">
      {data.map((item,index)=>(
        <Card key={index} data={item} refrence={ref}/>
      ))}
      </div>
      </>
  )
}

export default Foreground