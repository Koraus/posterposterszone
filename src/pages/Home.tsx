import { ProductCard } from "../components/ProductCard";
import SimpleSlider from "../components/SimpleSlider"
import { popularProducts, productsData } from "../data"

export const Home = () => {
  return (
    <>
      <div css={{ maxWidth: "1171px", margin: "0 auto" }}>
        <section>
          <SimpleSlider />
        </section>
        <section>
          <h2 css={{ textAlign: "center" }}>the most popular</h2>
          <div css={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1171px",
            margin: "0 auto"
          }}>

            {popularProducts.map((id) => {
              const productData = productsData.find((product) => product.id === id);
              return (
                productData && <ProductCard key={id} productData={productData} />
              )
            })}

          </div>
        </section>
      </div>
    </>
  )
}