import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../Utils/GlobalContext'

const Search = () => {
    const{lat, long, cdn} = useGlobalContext()
    const[query, setQuery] = useState("")
    const[suggestions, setSuggestions] = useState([])

    useEffect(() => {

        if(!query){
            setSuggestions([])
            return
        }

        let intervalId = setTimeout(() => {

            async function getSuggestions()
            {
                    const res = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${long}&str=${query}&trackingId=null&includeIMItem=true`)
                    const data = await res.json()
                    setSuggestions(data.data?.suggestions || [])
                    console.log(data.data.suggestions)

            }

            getSuggestions()

        }, 1200)


        return () => {
            clearTimeout(intervalId)
        }

    }, [query])



  return (
    <div>
        <Navbar />


        <div className=' flex flex-col mx-auto items-center mt-20 w-[50vw]'>
            <div className='relative'>
                <input value={query} onChange={(e) => {
                    setQuery(e.target.value)
                }} placeholder='i am lazy khud likh lo' type="text" className='border w-[50vw] h-[5vh] border-gray-400 rounded outline-none px-5 text-lg' />
                {suggestions.length > 0 ? <i onClick={() => {
                    setQuery("")
                }} class="fa-solid fa-xmark absolute top-3.5 right-5 hover:cursor-pointer"></i> :<i className="fa-solid fa-magnifying-glass absolute top-3.5 right-5"></i>}
            </div>


            {suggestions.length > 0 && <div className='w-[100%]'>
                {suggestions.map((item) => {
                    console.log(item)
                    return (
                        <div className='flex p-3 gap-2 hover:bg-blue-50 hover:cursor-pointer'>
                            <img className='h-[90px] w-[90px] rounded' src={cdn + item.cloudinaryId} alt="" />

                            <div className='flex flex-col justify-center'>
                                <p>{item.text}</p>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    </div>
  )
}

export default Search


