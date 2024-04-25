import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { postersData } from './data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>posterposterszone</h1>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      <p style={{ fontSize: `${count + 12}px` }}> {count} </p>
      <section style={{
          backgroundColor: '#050b5f',
        }}>
        <h2>SLIDER </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '90px',
          paddingBottom: '90px'
        }}>
          {
            postersData.map((poster) => {
              return <div key={poster.id} style={{ marginRight: "20px" }}>
                <img src={poster.imageUrl} alt={poster.title} style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '10%',
                }} />
                <p>{poster.title}</p>
                <p>{poster.price}</p>
              </div>
            })
          }

        </div>
      </section>

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
