import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Utils/GlobalContext'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Accordion from './Accordion'
import NestedUI from './NestedUI'

const Menu = () => {
    const{lat, long, cdn} = useGlobalContext()
    const{resId} = useParams()
    const[menuData, setMenuData] = useState([])
    const[resData, setResData] = useState({})
    const[carData, setCarData] = useState([])

    // console.log(menuData)
    // console.log(resData)
    // console.log(carData)

    function scrollFn(dir)
    {
        const scrollAmt = 200
        let dabba = document.getElementById("car")
        dabba.scrollBy({
            left : (dir == "right" ? scrollAmt : -scrollAmt),
            behavior : 'smooth'
        })
    }

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
            const data = await res.json()
            let arr = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1)
            // console.log(arr)
            if(arr[0].card.card.carousel)
            {
                setCarData(arr[0].card.card.carousel)
                arr = arr.slice(1)
            }
            setMenuData(arr.slice(0,arr.length - 2))
            setResData(arr[arr.length - 1].card.card)
        }
        getData()
    }, [])


  return (
    <div>

        <Navbar />


        {menuData.length > 0 && <div className='w-[50vw]  mx-auto mt-20 flex flex-col items-center'>

        <div>
            <h1 className='font-extrabold text-3xl'>{resData.name}</h1>
            <p className='text-gray-600 mt-4'>{resData.completeAddress}</p>
        </div>



        <span className='mt-10'>Menu</span>

        <hr className='border w-[100%] border-gray-200 mt-5 mb-5' />

        {   carData.length > 0 &&
        
        <div className='mt-10 mb-10'>
            <div className='flex justify-between items-center'>

                <p className='text-lg font-bold'>Top Picks</p>
                <div className='flex gap-4'>
                    <div onClick={() => scrollFn("left")}><i className="fa-solid fa-arrow-left"></i></div>
                    <div onClick={() => scrollFn("right")}><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            
            </div>
                <div id='car' className='flex w-[100%] overflow-scroll hide-scrollbar gap-5 mt-2'>
                    {carData.map((item) => {
                        return (
                            <img className='h-[250px] w-[250px] rounded-2xl ' src={cdn + item.dish.info.imageId} />
                        )
                    })}
                </div>
        </div>    
        
        }


        {
            menuData.map((item) => {
                // console.log(item)
                if(item.card.card.itemCards)
                {
                    return (
                    <>
                        <Accordion title={item.card.card.title} data={item.card.card.itemCards} />
                        <div className='h-[15px] w-[100%] bg-gray-200 mb-5'></div>
                    </>
                    )
                }
                else
                {
                    // console.log(item)
                    return (
                        <>
                            <NestedUI title={item.card.card.title} data={item.card.card.categories} />
                            <div className='h-[15px] w-[100%] bg-gray-200 mb-5'></div>
                        </>
                    )
                }
            })
        }





        
        </div>}

    </div>
  )
}

export default Menu