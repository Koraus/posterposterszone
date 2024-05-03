import { useRecoilState } from "recoil"
import { cartRecoil } from "../cartRecoil"
import { ProductData } from "../data"
import { favoritesRecoil } from "../favoriteRecoil";


export const ProductCard = ({ productData }: { productData: ProductData }) => {

    const [cart, setCart] = useRecoilState(cartRecoil);
    const [favorites, setFavorites] = useRecoilState(favoritesRecoil);

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
    const removeProduct = () => {
        setCart(
            cart.filter((item) => item.id !== productData.id)
        )
    }
    const switchFavorites = () => {
        console.log(favorites)
        if (favorites.some((item) => item === productData.id)) {
            setFavorites(
                favorites.filter((item) => item !== productData.id)
            )
        } else {
            setFavorites([
                ...favorites,
                productData.id
            ])
        }
    }
    return (
        <div css={{ padding: "10px", maxWidth: "30%" }}>
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
                +
            </button>
            <button onClick={() => reduceNumber()}>
                -
            </button>
            <button onClick={() => removeProduct()}>
                Remove
            </button>
            <button onClick={() => switchFavorites()}>
                {favorites.some((item) => item === productData.id) ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}