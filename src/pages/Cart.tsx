import { useRecoilValue } from "recoil"
import { cartRecoil } from "../cartRecoil"
import { ProductCard } from "../components/ProductCard"
import { productsData } from "../data"


export const Cart = () => {
    const cart = useRecoilValue(cartRecoil);

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    cart.map((item) => {
                        const productData = productsData.find((product) => product.id === item.id);
                        return (
                             productData && <ProductCard key={item.id} productData={productData} />
                    )
                })
                }
            </div>
        </div>
    )
}