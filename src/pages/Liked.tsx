import { useRecoilValue } from "recoil";
import { favoritesRecoil } from "../favoriteRecoil";
import { ProductCard } from "../components/ProductCard";
import { productsData } from "../data"


export const Liked = () => {
    const favorites = useRecoilValue(favoritesRecoil);
    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map((id) => {
                const productData = productsData.find((product) => product.id === id);
                return (
                    productData && <ProductCard key={id} productData={productData} />
                )
            })}
        </div>
    )
};