import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {useGlobalContext} from "../Utils/GlobalContext"

const Restaurant = () => {
    const[sliderData, setSLiderData] = useState([])
    const{cdn, long, lat} = useGlobalContext()


    const scrollFn = (direction) => {

        const mySlider = document.getElementById("slider")
        const slideAmount = 200

        mySlider.scrollBy({
            left: direction === 'left' ? -slideAmount : slideAmount,
            behavior : 'smooth'
        })

    }



    useEffect(() => {



        async function getData()
        {
            try {
                // console.log(lat, long)
                const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
                let apiData = await res.json()
                setSLiderData(apiData.data?.cards[0]?.card?.card?.imageGridCards?.info)
            } catch (error) {
                console.log(error)
            }
            
        }
        getData()
    }, [lat, long])

  return (
    <div className=' min-h-screen'>
        <Navbar />

       {sliderData &&  
       <div className=' w-[80vw] mx-auto mt-10 bg-white'>
            <div className='flex justify-between'>
                <p className='font-bold'>What's on your mind?</p>

                <div className='flex gap-4'>
                    <div onClick={() => scrollFn("left")}><i className="fa-solid fa-arrow-left"></i></div>
                    <div onClick={() => scrollFn("right")}><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>


            <div id='slider' className='flex overflow-x-scroll hide-scrollbar'>
                {sliderData.map((item) => {
                    return (
                        <img className='h-[150px]' key={item.id} src={cdn + item.imageId} />
                    )
                })}
            </div>
        </div>}


                <div className='h-[2000px]'></div>
    </div>
  )
}

export default Restaurant