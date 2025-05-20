import React from 'react'
import Demo from './Components/Demo'

const App = () => {
  const people = [
  { name: "Alice", age: 25, hobby: "Reading" },
  { name: "Bob", age: 30, hobby: "Cycling" },
  { name: "Charlie", age: 22, hobby: "Photography" },
  { name: "Diana", age: 28, hobby: "Painting" },
  { name: "Ethan", age: 35, hobby: "Gardening" }
];

  return (
    <div>
      {/* <Demo /> */}

      {people.map((item, index) => {
        return (
          <p key={index}>{item.name} - {item.age} - {item.hobby}</p>
        )
      })}
    </div>
  )
}

export default App