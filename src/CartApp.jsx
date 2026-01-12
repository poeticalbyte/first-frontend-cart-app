import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./features/navbar/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

  const {cartItems, handlerAddProductCart, handlerDeleteProductCart, total} = useItemsCart();

  return <>
    <Navbar />
    <div className="container">

      <h1>Cart App</h1>
      
      <CartRoutes 
        handlerAddProductCart={ handlerAddProductCart }
        total={ total }
        cartItems={ cartItems }
        handlerDeleteProductCart={ handlerDeleteProductCart }
        ></CartRoutes>

    </div>
  </>;
};