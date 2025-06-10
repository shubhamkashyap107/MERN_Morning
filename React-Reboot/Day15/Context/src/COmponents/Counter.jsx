import React, { useContext } from 'react'
import { myContext, useCounterContext } from '../../utils/MeraContext'


const Counter = () => {
    // const {count, setCount} = useContext(myContext)
    const{count} = useCounterContext()

  return (
    <div>
        <div>{count}</div>
    </div>
  )
}

export default Counter