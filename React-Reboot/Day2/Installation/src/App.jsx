import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Ad from './Components/Ad'
import Footer from './Components/Footer'
// import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{marginTop : "90px", display : "flex", padding : "30px", gap : "20px"}}>
        <Content />
        <Ad />
      </div>
      <Footer />
    </div>
  )
}

export default App



// import CompA from "./Components/CompA"
// import CompB from "./Components/CompB"
// import CompC from "./Components/CompC"

// const App = () => {
//   return (
//     <div>
//       {CompA()}
//       <CompB />
//       <CompC />
//     </div>
//   )
// }
// export default App


// function CompA()
// {
//   return (
//     <ul>
//       <li>A</li>
//       <li>B</li>
//       <li>C</li>
//     </ul>
//   )
// }



// const CompB = () => {
//   return <p>Hello from comp b</p>
// }


// function CompC()
// {
//   return (
//     <ol>
//       <li>A</li>
//       <li>B</li>
//       <li>C</li>
//     </ol>
//   )
// }