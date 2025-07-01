import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px'
  }

  const countStyle = {
    fontSize: '48px',
    marginBottom: '20px'
  }

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white'
  }

  return (
    <div style={containerStyle}>
      <div style={countStyle}>{count}</div>
      <div>
        <button style={buttonStyle} onClick={() => {
          setCount(prev => prev + 1)
          setCount(prev => prev + 1)


          // setCount(count + 1)
          // setCount(count + 2)
        }}>Increment</button>
        <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
