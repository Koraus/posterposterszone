import { ProductCard } from "../components/ProductCard"

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
            {Array.from
                ({ length: 10 }).map((_, index) => {
                    return <ProductCard key={index} id={index} />
                })
            }
        </div >
    )
}