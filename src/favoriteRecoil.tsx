import { atom } from "recoil";
import { localStorageAtomEffect } from "./utils/local-storage-atom-effect";


export const favoritesRecoil = atom({
    key: "favorites",
    default: [] as number[] | [],
    effects: [
        localStorageAtomEffect(),
    ],
});