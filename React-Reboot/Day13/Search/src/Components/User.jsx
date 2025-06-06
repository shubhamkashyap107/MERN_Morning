import React, { useEffect, useState } from 'react'

const User = () => {

  const[query, setQuery] = useState("")
  const[results, setResults] = useState([])

  useEffect(() => {
    if(!query)return

    const timeoutID = setTimeout(() => {
      const getData = async() => {
      // fetch("https://www.searchapi.io/api/v1/search?engine=google&api_key=UHHjP82yJrNjq6dRCMMBPkbS&q=" + query)
      const res = await fetch(`https://www.searchapi.io/api/v1/search?engine=google&api_key=*********&q=${query}`)
      const data = await res.json()
      setResults(data.organic_results)
    }
    getData()
    }, 2000)

    return () => {
      clearTimeout(timeoutID)
    }

  }, [query])

  return (
    <div>
      <input onChange={(e) => {
        setQuery(e.target.value)
      }} type="text" placeholder='Enter your query' />


      <div>{results.length > 0 && results.map((item) => {
        return (

          <div className='border p-2'>
            <a className='text-blue-500' href={item.link}>{item.displayed_link}</a>
            <p>{item.title}</p>
            <img src={item.thumbnail} alt="" />
          </div>
        )
      })}</div>
    </div>
  )
}

export default User