import React, { useContext } from 'react'
import A, { dataContext } from "./Components/A"

const App = () => {
  const{naam} = useContext(dataContext)
  return (
    <div>
      <p>{naam}</p>
      <A />
    </div>
  )
}

export default App