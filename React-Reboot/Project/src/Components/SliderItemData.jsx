import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../Utils/GlobalContext'
import { useParams } from 'react-router-dom'
import Skeleton from './Skeleton'
import Card from './Card'


const SliderItemData = () => {

    const[itemsData,setItemsData] = useState([])
    const{lat, long} = useGlobalContext()
    const{itemId, text} = useParams()
    console.log(itemsData)


    useEffect(() => {

        async function getData() {
            let url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${itemId}&tags=${text}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
            const res = await fetch(url)
            const data = await res.json()
            setItemsData(data.data.cards.splice(2))

        }
        getData()
    }, [])

  return (
    <div>
        <Navbar />

        <h2 className='text-3xl font-bold ml-[150px] mt-[50px]'>{text}</h2>
        {!itemsData.length > 0 ? <Skeleton /> : (
            <div className='grid grid-cols-4 w-[80vw] mx-auto gap-5 mt-5'>
                {itemsData.map((item) => {
                    return <Card resId={item.card.card.info.id} cuisines={item.card.card.info.cuisines} slaString={item.card.card.info.sla.slaString} avgRating={item.card.card.info.avgRating} name={item.card.card.info.name} subHeader={item.card.card.info?.aggregatedDiscountInfoV3?.subHeader || ""} header={item.card.card.info?.aggregatedDiscountInfoV3?.header || ""} key={item.card.card.info.id} areaName={item.card.card.info.areaName} imageId={item.card.card.info.cloudinaryImageId} />
                })}
            </div>
        )}

    </div>
  )
}

export default SliderItemData

