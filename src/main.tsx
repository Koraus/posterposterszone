import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { About } from './pages/About';
import { Delivery } from './pages/Delivery';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Cart } from './pages/Cart';
import { Liked } from './pages/Liked';


const root = document.getElementById('root') as HTMLElement;

export const paths = {
  home: "/",
  delivery: "/delivery",
  about: "/about",
  search: "/search",
  cart: "/cart",
  liked: "/liked"
}

const router = createHashRouter([
  {
    path: paths.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: paths.delivery,
        element: <Delivery />
      },
      {
        path: paths.about,
        element: <About />
      },
      {
        path: paths.search,
        element: <Search />
      },
      {
        path: paths.liked,
        element: <Liked />
      },
      {
        path: paths.cart,
        element: <Cart />
      }
    ]

  }
]);

console.log(router)

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)