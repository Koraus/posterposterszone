import { useRecoilState } from "recoil"
import { cartRecoil } from "../cartRecoil"
import { ProductData } from "../data"


export const ProductCard = ({ productData }: { productData: ProductData }) => {

    const [cart, setCart] = useRecoilState(cartRecoil)

    const increaseNumber = () => {
        if (cart.filter((item) => item.id === productData.id).length > 0) {
            setCart(
                cart.map((item) => {
                    if (item.id === productData.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            )
        } else {
            setCart([
                ...cart,
                {
                    id: productData.id,
                    quantity: 1,
                    addedAt: Date.now()
                }
            ])
        }
    }
    const reduceNumber = () => {
        if (cart.filter((item) => item.id === productData.id).length > 0) {

            if (cart.find((item) => item.id === productData.id)?.quantity === 1) {
                setCart(
                    cart.filter(
                        (item) => item.id !== productData.id)
                )
            } else {
                setCart(
                    cart.map((item) => {
                        if (item.id === productData.id) {
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        } else {
                            return item
                        }
                    })
                )
            }
        }
    }
    return (
        <div css={{ padding: "10px" }}>
            <img src={productData.imgUrl} alt={productData.title} css={{
                width: '200px',
                height: '200px'
            }} />
            <h2>{productData.title}</h2>
            <p>{productData.description}</p>
            <p>{productData.price}</p>
            <p> quantity: {
                cart.find((item) => item.id === productData.id)?.quantity || 0
            } </p>
            <button onClick={() => increaseNumber()} >
                Add to cart
            </button>
            <button onClick={() => reduceNumber()}>
                remove from cart
            </button>
        </div>
    )
}