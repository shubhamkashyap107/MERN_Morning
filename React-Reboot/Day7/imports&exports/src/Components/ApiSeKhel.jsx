import React, { useState } from 'react'

const ApiSeKhel = () => {


    const[num, setNum] = useState("")
    const[finalData, setFinalData] = useState({})


    async function getData()
    {
        // fetch("https://jsonplaceholder.typicode.com/comments/" + num)
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${num}`)
        const data = await res.json()
        setFinalData(data)
        setNum("")
    }

  return (
    <div>
        <div>

            <input value={num} onChange={(e) => {
                setNum(e.target.value)
            }} type="number" />
            <button onClick={() => {
                getData()
            }}>Get Data</button>
        
        </div>


       {finalData.name &&  <div>
            <h2>{finalData.name}</h2>
            <p>{finalData.email}</p>
            <p>{finalData.body}</p>
        </div>}
{/* 
        <div>
            <h2>{finalData.name}</h2>
            <p>{finalData.email}</p>
            <p>{finalData.body}</p>
        </div> */}
    </div>
  )
}

export default ApiSeKhel