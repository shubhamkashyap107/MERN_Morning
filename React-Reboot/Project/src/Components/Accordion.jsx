import React, { useState } from 'react'
import AccordionCard from './AccordionCard'

const Accordion = ({title, data}) => {

    const[showDropdown, setShowDropdown] = useState(true)
    let icon = document.getElementById("icon")
    // console.log(showDropdown)

  return (
    <div className='w-[100%] border-b border-b-black  '>
        <div className='flex justify-between'>
            <p className='text-lg'>{title}({data.length})</p>
            <i id='icon' onClick={() => {
                setShowDropdown(!showDropdown)
                icon.classList.contains("fa-angle-down") ? (icon.classList.remove("fa-angle-down")(icon.classList.add("fa-angle-up"))) : (icon.classList.remove("fa-angle-up")(icon.classList.add("fa-angle-down")))
            }} class="fa-solid fa-angle-up"></i>
        </div>


        {showDropdown && <div>
            {data.map((item) => {
                console.log(item)
                return <AccordionCard info={item.card.info} />
            })}
        </div>}
    </div>
  )
}

export default Accordion