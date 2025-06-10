import React, { useContext } from 'react'
import { myContext, useCounterContext } from '../../utils/MeraContext'

const Home = () => {
  // const{setCount, count} = useContext(myContext)
  const{count, setCount} = useCounterContext()
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(0)

      }}>Reset</button>
      <button onClick={() => {
        setCount(count - 1)

      }}>Decrement</button>
    </div>
  )
}

export default Home