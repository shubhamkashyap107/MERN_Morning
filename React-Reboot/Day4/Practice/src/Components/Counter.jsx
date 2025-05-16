import { useState } from "react"
const Counter = () => {

    const[count, setCount] = useState(0)
    // let count = 0 // react cant track changes on conventional variables

  return (
    <div id='counter-body'>
        <div id='counter-display'>{count}</div>

        <div id='counter-btns'>
            <button onClick={() => {
                // count = count - 1
                // console.log(count)
                setCount(count - 1)
            }} className='counter-btn'>Decrement</button>
            <button onClick={() => {
                // count = 0
                // console.log(count)
                setCount(0)
            }} className='counter-btn'>Reset</button>
            <button onClick={() => {
                // count = count + 1
                // console.log(count)
                setCount(count + 1)
            }} className='counter-btn'>Increment</button>
        </div>
    </div>
  )
}

export default Counter