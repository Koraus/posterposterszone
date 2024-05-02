import { useEffect, useState } from "react"
import { Cart } from "../Layout"

export const ProductCard = ({ id }: { id: number }) => {

    const [quantity, setQuantity] = useState(
        JSON.parse(localStorage.getItem("cart") as string).products.find((product: { id: number }) => product.id === id)?.quantity || 0
    )

    useEffect(() => {
        const cart: Cart = JSON.parse(localStorage.getItem("cart") as string)
        const productIndex = cart.products.findIndex((product) => product.id === id)
        if (productIndex === -1) {
            cart.products.push({
                id,
                quantity,
                addedAt: Date.now()
            })
        } else {
            cart.products[productIndex].quantity = quantity
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [quantity] )
    return (
        <div
            css={
                {
                    border: '1px solid black',
                    padding: '20px',
                    margin: '20px',
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                }
            }>
            <h1>ProductCard</h1>
            <img src="https://via.placeholder.com/150" alt="product" />
            <p>Product {id}</p>
            <p>Price: $10</p>
            <p>Quantity: {quantity || 0}</p>
            <button
                onClick={() => {
                    setQuantity(quantity + 1)
                }}
            >Add to cart</button>

        </div>
    )
}