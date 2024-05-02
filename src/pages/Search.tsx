import { ProductCard } from "../components/ProductCard"
import { productsData } from "../data"

export const Search = () => {

    return (
        <div >
            <form>
                <input type="text" placeholder="Search for products" />
                <button
                    onClick={
                        (e) => {
                            e.preventDefault()
                            console.log('search')
                        }
                    }>Search</button>
            </form>
            <div css={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'

            }}>
                {
                    productsData.map(
                        (productData) => {
                            return (
                                <ProductCard key={productData.id} productData={productData} />
                            )
                        }
                    )
                }
            </div>

        </div >
    )
}