import React from 'react'
import { useGlobalContext } from '../Utils/GlobalContext'

const AccordionCard = ({info}) => {
    console.log(info)
    const{name, price, imageId, description, isVeg, defaultPrice} = info
    const rating = info.ratings.aggregatedRating.rating
    const{cdn} = useGlobalContext()
    

  return (
    <div className='flex border'>
        <div>
            <p className='font-bold text-lg'>{name}</p>
            <p>₹{Number(price || defaultPrice) / 100}</p>
            <span>{rating}</span>
            <p>{description}</p>
        </div>
        <img className='h-[200px]' src={cdn + imageId} alt="" />

    </div>
  )
}

export default AccordionCard