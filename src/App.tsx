import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>posterposterszone</h1>
      <p >
      Poster
      </p>
      <button onClick={
        () => setCount((count) => count + 1)
      }> 
        +
      </button>
      <p style={
        {
          fontSize: `${count + 12}px`
        }
      }>
        {count}
      </p>
    </>
  )
}

export default App
