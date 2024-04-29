import { Header } from './components/Header'
import { Footer } from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './components/SimpleSlider';


function App() {

  return (
    <>
      <div css={{ maxWidth: "1171px", margin: "0 auto" }}>
        <Header />
        <section>
          <SimpleSlider />
        </section>
      </div>
      <section>
      <h2 css={{textAlign: "center"}}>the most popular</h2>
        <div className='products' css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1171px",
          margin: "0 auto"
        }}>
         
          {Array.from({ length: 6 }).map((_, index) => {
            return <div css={{ padding: "20px" }} key={index}>
              <div className='product' css={{}}>
                <h2>Product</h2>
                <img src="https://via.placeholder.com/150" alt="" />
                <p>Content</p>
              </div>

            </div>
          })}
        </div>
      </section>
      <section>
        <div className='categories' css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1171px",
          margin: "0 auto"
        }}>
          {Array.from({ length: 6 }).map((_, index) => {
            return <div css={{ padding: "20px" }} key={index}>
              <div className='categories' css={{}}>
                <h2>Categories</h2>
                <img src="https://via.placeholder.com/300" alt="" />
                <p>Content</p>
              </div>

            </div>
          })}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
