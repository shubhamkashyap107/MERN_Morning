import React, { useEffect, useState } from 'react'

const ApiComp = () => {

    const[apiData, setApiData] = useState(null)

    useEffect(() => {
        async function getData()
        {
            const res = await fetch("https://hp-api.onrender.com/api/characters")
            const data = await res.json()
            // console.log(data)
            // apiData = data
            setApiData(data)
        }
        getData()
    }, [])


  return (
    <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr"}}>{apiData && apiData.map((item, index) => {
        return (
            <div style={{height : "350px", width : "250px"}} key={index}>
                {/* <img src={item.image ? item.image : "https://images.unsplash.com/photo-1745139203589-c50aa2e114dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"} alt="" /> */}
                <img style={{width : "230px", height : "280px"}} src={item.image || "https://images.unsplash.com/photo-1745139203589-c50aa2e114dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                <p>{item.name}</p>
            </div>
        )
    })}</div>
  )
}

export default ApiComp