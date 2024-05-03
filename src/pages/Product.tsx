import { useParams } from "react-router-dom"
import { productsData } from "../data"


export const Product = () => {
    const id = useParams<{ id: string }>().id
    const product = productsData.find((product) => product.id == Number(id))
    console.log(product)
    return (
        <div>
            <section>
            <h1 css={{textAlign: "center"}}>{id}</h1>
                <div css={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "1171px",
                    margin: "0 auto"
                }}>
                    {product && <div>
                        <img src={product.imgUrl} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                    }
                </div>
            </section>
        </div>
    )
} 