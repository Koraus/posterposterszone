import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useEffect } from "react"


export type Cart = {
    products: {
        id: number,
        quantity: number
        addedAt: number,

    }[]
}

export const Layout = () => {
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(
            {
                products: []
            }
        ))
    }, [])
    return (
        <div css={{ maxWidth: "1171px", margin: "0 auto" }}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}