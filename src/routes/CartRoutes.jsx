import { Navigate, Route, Routes } from "react-router-dom";
import { Catalog } from "../features/catalog/Catalog";
import { Cart } from "../features/cart/Cart";

export const CartRoutes = ({ handlerAddProductCart, total, cartItems, handlerDeleteProductCart }) => {
  return <>
    <Routes>
        
        <Route path="catalog" element={
          <Catalog handler = {(product) => handlerAddProductCart(product)} />
        } />

        <Route path="cart" element={(
          cartItems?.length <= 0 ?
          <div className="alert alert-warning">No hay productos en el carrito de compras aún...</div>
          : (
            <div className="my-4 w-50">
              <Cart
                total={ total }
                items={ cartItems }
                handlerDelete={ handlerDeleteProductCart }
              />
            </div>
          )
        )} />

        <Route path="/" element={ <Navigate to={'/catalog'}/> } />

      </Routes>
  </>;
};