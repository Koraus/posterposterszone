import { Header } from './components/Header'
import { Footer } from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './components/SimpleSlider';


function App() {

  return (
    <>
      <div css={{maxWidth: "1171px", margin: "0 auto"}}>
        <Header />
        <h1>posterposterszone</h1>
        <section>
          <h2 css={{ textAlign: "center" }}>SLIDER </h2>
          <SimpleSlider />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
