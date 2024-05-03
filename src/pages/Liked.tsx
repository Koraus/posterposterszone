import { useRecoilValue } from "recoil";
import { favoritesRecoil } from "../favoriteRecoil";
import { ProductCard } from "../components/ProductCard";
import { productsData } from "../data"


export const Liked = () => {
    const favorites = useRecoilValue(favoritesRecoil);
    return (
        <div>
            <h1>Favorites</h1>
            {
                favorites.length === 0 && <div>  <p>Your favourite list is currently empty</p>

                    <p>Add all your favourites to this list for saving and sharing</p> </div>
            }
            {favorites.map((id) => {
                const productData = productsData.find((product) => product.id === id);
                return (
                    productData && <ProductCard key={id} productData={productData} />
                )
            })}
        </div>
    )
};