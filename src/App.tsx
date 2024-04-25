import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>posterposterszone</h1>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      <p style={{ fontSize: `${count + 12}px` }}> {count} </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#050b5f',
        paddingTop: '90px',
        paddingBottom: '90px'
      }}>
        SLIDER
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#2f055f',
        paddingTop: '90px',
        paddingBottom: '90px'
      }}>
        categories
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {Array.from({ length: 3 }).map((_, index) => <div key={index}> category {index} </div>)}
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#83cdec',
        paddingTop: '90px',
        paddingBottom: '90px'
      }}>
        benefits
      </div>
      <Footer />
    </>
  )
}

export default App
