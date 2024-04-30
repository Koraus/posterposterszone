import SimpleSlider from "../components/SimpleSlider"

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
      </div>
    </>
  )
}