import React from 'react'
import Accordion from './Accordion'

const NestedUI = ({title, data}) => {
    // console.log(data)
  return (
    <div className='w-[100%] '>
        <p className='text-lg font-bold'>{title}</p>
        <div>
            {data.map((item, index) => {
                // console.log(item)
                return <Accordion title={item.title} data={item.itemCards} isNested={true} isLast={index == data.length - 1} />
            })}
        </div>
    </div>
  )
}

export default NestedUI