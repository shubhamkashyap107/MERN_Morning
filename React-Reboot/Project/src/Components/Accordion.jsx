import React, { useState } from 'react'
import AccordionCard from './AccordionCard'

const Accordion = ({title, data, isNested, isLast}) => {

    const[showDropdown, setShowDropdown] = useState(true)
    let icon = document.getElementById("icon")
    // console.log(data)

  return (
    <div className={'w-[100%] mb-3 ' + (isNested ? (isLast ? "" : "border-b border-gray-200 pb-3") : "")}>
        <div className='flex justify-between'>
            <p className='text-lg'>{title}({data.length})</p>
            <i  onClick={() => {
                setShowDropdown(!showDropdown)
                
            }} class={"fa-solid " + (showDropdown ? "fa-angle-up" : "fa-angle-down")}></i>
        </div>


        {showDropdown && <div>
            {data.map((item, index) => {
                // console.log(item)
                return <AccordionCard info={item.card.info} isLast={index == data.length - 1} />
            })}
        </div>}


        
    </div>
  )
}

export default Accordion