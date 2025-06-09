import React, { useContext } from 'react'
import { dataContext } from './A'


const D = () => {
  const {myStr, naam} = useContext(dataContext)
  return (
    <>
    <p>{myStr}</p>
    <p>{naam}</p>
    </>
  )
}

export default D