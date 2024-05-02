import { atom } from "recoil";
import { localStorageAtomEffect } from "./utils/local-storage-atom-effect";

export type ProductInCart = {
    id: number,
    quantity: number
    addedAt: number,

}

export const cartRecoil = atom({
    key: "cart",
    default: [] as ProductInCart[] | [],
    effects: [
        localStorageAtomEffect(),
    ],
});