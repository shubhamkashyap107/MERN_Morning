import React from 'react'
import First from "./Components/First"
import Second from './Components/Second'
import Third from './Components/Third'



const App = () => {
  return (
    <div>
      <First />
      <Second></Second>
      {Third()}
    </div>
  )
}

export default App