import { useEffect, useState } from 'react'

const UseEffectDemo = () => {

    const[count, setCount] =  useState(0)
    const[searchValue, setSearchValue] = useState("")

    // useEffect(() => {
    //     // API call
    //     console.log("Use effect demo component mounted")
    // })


    //  useEffect(() => {
    //     // API call
    //     console.log("Use effect demo component mounted")
    // }, []) // empty dependency array


    useEffect(() => {
        console.log("API called with query " + searchValue)
    }, [searchValue])



    

  return (
    <>

    <input onChange={(e) => {
        setSearchValue(e.target.value)
    }} type="text" />


    <div>

        <div>{count}</div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
    </div>



        <h1>Hello ji</h1>
    </>
  )
}

export default UseEffectDemo