import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"


export const Layout = () => {

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