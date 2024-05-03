import { useRecoilState } from "recoil"
import { cartRecoil } from "../cartRecoil"
import { ProductData } from "../data"
import { favoritesRecoil } from "../favoriteRecoil";
import { NavLink } from 'react-router-dom';


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
        <NavLink to={`/product/${productData.id}`} css={{
            textDecoration: 'none',
            color: 'black',
            margin: '10px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px black',
            transition: '0.3s',
            maxWidth: "30%",
            '&:hover': {
                boxShadow: '0px 0px 10px 0px grey',
            }
        
        }}>
            <div css={{ padding: "10px",  }} >
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
        </NavLink>
    )
}