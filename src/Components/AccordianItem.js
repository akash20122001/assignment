import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {Collapse} from "react-collapse";
function AccordianItem({open,toggle,title,desc}) {
  return (
    <div className=''>
        <div className='h-[1px] bg-black'></div>
        <div className='bg-white py-[10px] flex justify-between items-center cursor-pointer'
        onClick={toggle}>
            <p className='text-[18px] '>{title}</p>
            <div className='text-[30px] text-left	'>
                {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className='bg-white pr-[30px] pb-[20px] text-left	'>{desc}</div>
        </Collapse>
    </div>
  )
}

export default AccordianItem