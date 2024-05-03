import { useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { productsData } from "../data"

export const Search = () => {

    const [value, setValue] = useState('')

    const fillterProducts = productsData.filter(
        (productData) => {
            const titles = productData.title.toLowerCase().includes(value.toLowerCase());
            const desc = productData.description.toLowerCase().includes(value.toLowerCase());
            const tags = productData.tags.join('').toLowerCase().includes(value.toLowerCase());
            return (titles || desc || tags) && value !== '' ? productData : null
        }
    ).map((productData) => productData.id)

    return (
        <div >
            <form>
                <input type="text" placeholder="Search for products"
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <button
                    onClick={
                        (e) => {
                            e.preventDefault()
                            console.log(fillterProducts)
                        }
                    }>Search</button>
            </form>
            <div css={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'

            }}>

                {fillterProducts.map((id) => {
                    const productData = productsData.find((product) => product.id === id);
                    return (
                        productData && <ProductCard key={id} productData={productData} />
                    )
                })}
            </div>
        </div >
    )
}