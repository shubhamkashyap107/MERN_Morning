//default
// import Demo from "./Components/Demo"
// import KuchBhi from "./Components/Demo"
// const App = () => {
//   return (
//     <div>
//       {/* <Demo /> */}
//       <KuchBhi />
//     </div>
//   )
// }

// export default App




// named 

// import { a }from "./Components/Demo"
// import { DemoThree as MyFn, DemoFour } from "./Components/Demo"

// const App = () => {
//   return (
//     <div>
//       {/* {a} */}
//       {/* <DemoThree /> */}
//       <MyFn />
//       <DemoFour />
//     </div>
//   )
// }

// export default App





// useeffect chaining


import React, { useEffect } from 'react'
import Parent from './Components/Parent'
import ParentTwo from './Components/ParentTwo'
import ApiSeKhel from './Components/ApiSeKhel'

const App = () => {

  useEffect(()=> {
    console.log("App Mounted")
  }, [])

  return (
    <div>
      {/* <ParentTwo />
      <Parent /> */}
      <ApiSeKhel />
    </div>
  )
}

export default App